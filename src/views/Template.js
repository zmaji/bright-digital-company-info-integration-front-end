import React from 'react';

const Template = () => {
  return (
    <div className="v-template v-template__background-color--light-blue">
        <div className="v-template__container">
            <div className="v-template__squeeze v-template__squeeze--custom">
                <div className="v-template__header-container">
                    <img className="v-template__header-logo" src="https://cdn2.hubspot.net/hub/248909/hubfs/Bright_logo/Bright-logo-wit.png?width=240&upscale=true&name=Bright-logo-wit.png" alt="Bright Digital Logo" />

                    <div className='v-template__header-title'>
                      Company.info Integration
                    </div>
                </div>

                <div className="v-template__seperator">
                </div>

                <div className="v-template__image-container">
                </div>

                <div className="v-template__content-container">
                  <h1 className="v-template__content-title">
                    Hi firstname lastname,
                  </h1>

                  <div className="v-template__content-paragraph">
                    Thank you for registering. Please enter the following code to activate your account:

                    <span className='v-template__content-code'>**code**</span>
                  </div>
                </div>
            </div>
        </div>

        <div className="v-template__footer">
          <div className="v-template__footer-container">
            <img className="v-template__footer-logo" src="https://cdn2.hubspot.net/hub/248909/hubfs/Bright_logo/Bright-logo-wit.png?width=240&upscale=true&name=Bright-logo-wit.png" alt="Bright Digital Logo" />

            <div className="v-template__footer-paragraph">
              The full-service partner for companies that want to grow smarter with HubSpot
            </div>

            <div className="v-template__socials-container">
              <a className="v-template__social-ref" href="https://www.linkedin.com/company/2632117" target="_blank" rel="noopener noreferrer">
                <img className="v-template__socials-item" src="https://www.brightdigital.com/hs/hsstatic/TemplateAssets/static-1.262/img/hs_default_template_images/modules/Follow+Me+-+Email/linkedin_original_white.png" alt="LinkedIn logo" />
              </a>

              <a className="v-template__social-ref" href="https://twitter.com/BureauBright" target="_blank" rel="noopener noreferrer">
                <img className="v-template__socials-item" src="https://www.brightdigital.com/hs/hsstatic/TemplateAssets/static-1.262/img/hs_default_template_images/modules/Follow+Me+-+Email/twitter_original_white.png" alt="X logo" />
              </a>

              <a className="v-template__social-ref" href="https://www.instagram.com/brightwaytogrow/" target="_blank" rel="noopener noreferrer">
                <img className="v-template__socials-item" src="https://www.brightdigital.com/hs/hsstatic/TemplateAssets/static-1.262/img/hs_default_template_images/modules/Follow+Me+-+Email/instagram_original_white.png" alt="Instagram logo" />
              </a>

              <a className="v-template__social-ref" href="https://www.facebook.com/Brightwaytogrow/" target="_blank" rel="noopener noreferrer">
                <img className="v-template__socials-item" src="https://www.brightdigital.com/hs/hsstatic/TemplateAssets/static-1.262/img/hs_default_template_images/modules/Follow+Me+-+Email/facebook_original_white.png" alt="Facebook logo" />
              </a>
            </div>

            <div className="v-template__seperator-line">
            </div>

            <div className="v-template__links-container">
              <a className="v-template__links-item" href="https://www.brightdigital.com/nl/" target="_blank" rel="noopener noreferrer">
                Brightdigital.com
              </a>

              <div className="v-template__word-seperator">
                |
              </div>

              <a className="v-template__links-item" href="https://www.brightdigital.com/nl/privacyverklaring" target="_blank" rel="noopener noreferrer">
                Privacyverklaring
              </a>

              <div className="v-template__word-seperator">
                |
              </div>

              <a className="v-template__links-item" href="https://www.brightdigital.com/hubfs/Bright%20Digital%20website/2022%20_%20Algemene%20voorwaarden%20_%20Bright%20Digital%20B.V..pdf" target="_blank" rel="noopener noreferrer">
                Algemene voorwaarden
              </a>
            </div>

            <div className="v-template__footer-address">
              Bright Digital B.V., Vosselmanstraat 300, Apeldoorn, Gelderland, +31 (0)85 760 81 81
            </div>
          </div>
        </div>
    </div>
  );
};

export default Template;
