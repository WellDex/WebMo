const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require("jsonwebtoken");
const { check, validationResult } = require('express-validator');
const User = require('../modules/User');
const router = Router();

//  /auth/register
router.post(
    '/register',
    [
        check('name', 'Минимальное количество 4 символа').isLength({ min: 4, max: 24 }),
        check('lastName', 'Минимальное количество 4 символа').isLength({ min: 4, max: 24 }),
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов, максимальна - 24').isLength({ min: 6, max: 24 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации',
                });
            }

            const { name, lastName, email, password } = req.body;

            const cand = await User.findOne({ email });

            if (cand) {
                return res.status(400).json({ message: 'Пользователь существует' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ name, lastName, email, password: hashedPassword });

            await user.save();

            res.status(201).json({ message: 'Пользователь создан' });
        } catch (e) {
            res.status(500).json({ message: 'Server error ' + e });
        }
    }
);

//  /auth/login
router.post(
    '/login',
    [
        check('email', 'Некорректный email').normalizeEmail().isEmail(),
        check('password', 'Минимальная длина пароля 6 символов, максимальна - 24').exists(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему',
                });
            }

            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' });
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' },
            );

            res.json({ token, userId: user.id, email: user.email, isBanned: user.status });
        } catch (e) {
            res.status(500).json({ message: 'Server error ' + e });
        }
    }
);

module.exports = router;