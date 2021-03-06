const { Schema, model, Types } = require('mongoose');

const now = new Date(); 
let dd = now.getDate();
let mm = now.getMonth() + 1;
const yyyy = now.getFullYear();

if (dd < 10) dd = `0${dd}`;
if (mm < 10) mm = `0${mm}`;

const time = `${dd} ${mm} ${yyyy}`;

const schema = new Schema({
    projectName: { type: String, required: true },
    description: { type: String },
    A: { type: Number, default: 2.0 },
    B: { type: Number, default: 1.5 },
    P1: { type: Number, default: 1.00 },
    P2: { type: Number, default: 0.33 },
    params: {
        CPLX: { type: Number, default: null },
        PDIF: { type: Number, default: null },
        PERS: { type: Number, default: null },
        PREX: { type: Number, default: null },
        FCIL: { type: Number, default: null },
        SCED: { type: Number, default: null },
        RUSE: { type: Number, default: null },
        TEAM: { type: Number, default: null },
        PEFF: { type: Number, default: null },
    },
    size: {
        LanguageCoding: { type: String, default: null },
        VnytrLogOb: {
            low: { type: Number, default: null },
            middle: { type: Number, default: null },
            high: { type: Number, default: null },
            count: { type: Number, default: null }
        },
        VneshInterface: {
            low: { type: Number, default: null },
            middle: { type: Number, default: null },
            high: { type: Number, default: null },
            count: { type: Number, default: null }
        },
        VneshVvod: {
            low: { type: Number, default: null },
            middle: { type: Number, default: null },
            high: { type: Number, default: null },
            count: { type: Number, default: null }
        },
        VneshVuvod: {
            low: { type: Number, default: null },
            middle: { type: Number, default: null },
            high: { type: Number, default: null },
            count: { type: Number, default: null }
        },
        VneshZapros: {
            low: { type: Number, default: null },
            middle: { type: Number, default: null },
            high: { type: Number, default: null },
            count: { type: Number, default: null }
        },
    },
    result: {
        common: {
            CDI: { type: Number, default: null },
        },
        size: {
            sizeWebObject: { type: Number, default: null },
        },
        other: {
            Tn: { type: Number, default: null },
            Dn: { type: Number, default: null },
            Cn: { type: Number, default: null },
        },
    },
    createTime: { type: String, default: time },
    owner: { type: Types.ObjectId, ref: 'User' }
});

module.exports = model('Project', schema);