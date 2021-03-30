const { Router } = require('express')
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/authMiddleware')
const Project = require('../modules/Project')
const router = Router()

//  /project/create
router.post(
    '/create',
    auth,
    [
        check('projectName', 'Максимальное количество символов - 100')
            .isLength({ max: 60 }).isString(),
        check('description', 'Максимальное количество символов - 250')
            .isLength({ max: 120 }).isString(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при создании проекта'
                })
            }

            const { name } = req.body;

            const cand = await Todo.findOne({ name });

            if (cand) {
                return res.json({ project: cand })
            }

            const project = new Project(...req.body);

            await project.save();

            res.status(201).json({ message: 'Проект создан', project });

        } catch (e) {
            res.status(500).json({ message: 'Server error ' + e })
        }
    }
)

//  /project/
router.get('/', auth, async (req, res) => {
    try {
        const id = req.body.id || req.user.userId
        const projects = await Project.find({ owner: id })

        res.json(projects)

    } catch (e) {
        res.status(500).json({ message: 'Server error ' + e })
    }
})

//  /project/update
router.post(
    '/update',
    auth,
    [
        check('id', 'Отсутствует id проекта').isLength({ min: 1 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные проекта'
                })
            }

            const project = await Project.findById(id)

            project.projectName = req.body.projectName;
            project.description = req.body.description;
            project.projectType = req.body.projectType;
            project.A = req.body.A;
            project.B = req.body.B;
            project.P1 = req.body.P1;
            project.P2 = req.body.P2;
            project.params.CPLX = req.body.params.CPLX;
            project.params.PDIF = req.body.params.PDIF;
            project.params.PERS = req.body.params.PERS;
            project.params.PREX = req.body.params.PREX;
            project.params.FCIL = req.body.params.FCIL;
            project.params.SCED = req.body.params.SCED;
            project.params.RUSE = req.body.params.RUSE;
            project.params.TEAM = req.body.params.TEAM;
            project.params.PEFF = req.body.params.PEFF;
            project.size.ModelSize = req.body.size.ModelSize;
            project.size.LanguageCoding = req.body.size.LanguageCoding;
            project.size.VnytrLogOb.low = req.body.size.VnytrLogOb.low;
            project.size.VnytrLogOb.middle = req.body.size.VnytrLogOb.middle;
            project.size.VnytrLogOb.high = req.body.size.VnytrLogOb.high;
            project.size.VnytrLogOb.count = req.body.size.VnytrLogOb.count;
            project.size.VneshInterface.low = req.body.size.VneshInterface.low;
            project.size.VneshInterface.middle = req.body.size.VneshInterface.middle;
            project.size.VneshInterface.high = req.body.size.VneshInterface.high;
            project.size.VneshInterface.count = req.body.size.VneshInterface.count;
            project.size.VneshVvod.low = req.body.size.VneshVvod.low;
            project.size.VneshVvod.middle = req.body.size.VneshVvod.middle;
            project.size.VneshVvod.high = req.body.size.VneshVvod.high;
            project.size.VneshVvod.count = req.body.size.VneshVvod.count;
            project.size.VneshVuvod.low = req.body.size.VneshVuvod.low;
            project.size.VneshVuvod.middle = req.body.size.VneshVuvod.middle;
            project.size.VneshVuvod.high = req.body.size.VneshVuvod.high;
            project.size.VneshVuvod.count = req.body.size.VneshVuvod.count;
            project.size.VneshZapros.low = req.body.size.VneshZapros.low;
            project.size.VneshZapros.middle = req.body.size.VneshZapros.middle;
            project.size.VneshZapros.high = req.body.size.VneshZapros.high;
            project.size.VneshZapros.count = req.body.size.VneshZapros.count;
            project.result.common.CDI = req.body.result.common.CDI;
            project.result.size.sizeWebObject = req.body.result.size.sizeWebObject;
            project.result.size.countStringCode = req.body.result.size.countStringCode;
            project.result.other.Tn = req.body.result.other.Tn;
            project.result.other.Tmin = req.body.result.other.Tmin;
            project.result.other.Tmax = req.body.result.other.Tmax;
            project.result.other.Dn = req.body.result.other.Dn;
            project.result.other.Dmin = req.body.result.other.Dmin;
            project.result.other.Dmax = req.body.result.other.Dmax;
            project.result.other.Cn = req.body.result.other.Cn;

            await project.save();

            res.status(201).json({ message: 'Проект обновлен', project });

        } catch (e) {
            res.status(500).json({ message: 'Server error ' + e });
        }
    }
)

//  /project/delete
router.delete(
    '/delete',
    [
        check('id', 'Отсутствует id todo').isLength({ min: 1 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные todo'
                })
            }

            const { id } = req.body;

            const project = await Project.findById(id);

            await project.delete();

            res.status(201).json({ message: 'Проект удален' });

        } catch (e) {
            res.status(500).json({ message: 'Server error ' + e });
        }
    }
)

module.exports = router;