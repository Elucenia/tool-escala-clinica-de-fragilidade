'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),api=require('./calculator.js');
const browser={Intl};vm.runInNewContext(fs.readFileSync('calculator.browser.js','utf8'),browser);
let checks=0;
for(let grade=1;grade<=9;grade++){const input={cfs:String(grade)},a=api.calculate(input),b=browser.EluceniaTool.calculate(input);assert.equal(a.raw.score,grade);assert.equal(a.main[0],String(grade));assert.equal(b.raw.score,grade);assert(!Object.hasOwn(a,'level')&&!Object.hasOwn(a,'verdict')&&!Object.hasOwn(a,'note'));checks+=4;}
for(const value of [0,10,1.5,'',null,true,'NaN','5,5']){const result=api.calculate({cfs:value});assert(result.error&&!result.raw&&!result.main);checks++;}
for(const value of [[5],['5'],{toString:()=> '5'}]){const a=api.calculate({cfs:value}),b=browser.EluceniaTool.calculate({cfs:value});assert.equal(a.code,'INVALID_OPTION');assert.equal(b.code,'INVALID_OPTION');checks+=2;}assert(api.metadata.config.bands.every(b=>b[1]==='info'));checks++;
const meta=require('./tool.json');assert.equal(meta.review.ownerPermission,'not-established');assert.equal(meta.review.officialInstrumentEquivalent,false);assert.equal(meta.review.fullInstrumentImplementation,false);checks+=3;
const code=fs.readFileSync('localization.js','utf8'),ctx={};vm.runInNewContext(code,ctx);assert.equal(Object.keys(ctx.EluceniaToolLocales.locales).length,10);
for(const[locale,row]of Object.entries(ctx.EluceniaToolLocales.locales)){assert.equal(row.tool.fields.length,1);assert.deepEqual(Object.keys(row.tool.fields[0][3].opts),['1','2','3','4','5','6','7','8','9']);assert(Object.values(row.tool.fields[0][3].opts).every((label,i)=>label===String(i+1)));assert(row.tool.limits&&row.tool.formula);assert(fs.existsSync('documentation/'+locale+'.md'));checks+=5;}
console.log(JSON.stringify({id:meta.tool.id,checks,failed:0,gradeIdentityOnly:true,clinicalApproval:false,professionalLanguageApproval:false,ownerPermission:'not-established'}));
