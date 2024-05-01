const generateHeaderScript = (portalId) => {
    const headerScriptData = [
        `<link rel="stylesheet" href="https://${portalId}.fs1.hubspotusercontent-eu1.net/hubfs/${portalId}/scripts/Stylescript.css" />
        <script type="text/javascript" src="https://${portalId}.fs1.hubspotusercontent-eu1.net/hubfs/${portalId}/scripts/FormScript.js"></script>`
        ];
    
    return headerScriptData
}



export default generateHeaderScript;
