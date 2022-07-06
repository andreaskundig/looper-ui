import setupDom from './setup.js'
import makeSimpleUi from './simple-ui.js'; 
import makeExportAndInfoUi from './web-export-info-ui.js'; // ??
import defaultHtmlTemplate from './htmlTemplates/defaultHtmlTemplate.js';

/**
 * make ui wrapper function
 * @param {HTMLElement} targetElement - Dom element where the UI should libe
 * @param {*} looper - looper instance
 * @param {string} htmlTemplate - ui html tree represented as a string
 * @param {boolean} fullSizeGif - ?? you want the big one ??
 * @param {boolean} newTiming - ??
 * @param {{width:number, height:number}} dimension 
 */
export default function makeUI(targetElement, htmlTemplate = defaultHtmlTemplate, looper, fullSizeGif, newTiming, dimension){
    setupDom(targetElement, htmlTemplate);
    makeSimpleUi(looper, fullSizeGif, makeExportAndInfoUi, newTiming, dimension);
}