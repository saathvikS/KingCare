// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: lCdVZS_k-eI

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: e0SGo-44ddg/component
import Tagline from "../../Tagline"; // plasmic-import: lHrnwZQKsB/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal"; // plasmic-import: R6s1FdhksG/codeComponent
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: bozP4lLlAZ/codeComponent
import Button from "../../Button"; // plasmic-import: GnNzqwgKsTt/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import Footer from "../../Footer"; // plasmic-import: EdywSuH81fY/component
import FooterBottom from "../../FooterBottom"; // plasmic-import: 5nUaKoc582/component

import { useScreenVariants as useScreenVariantsnTHrtOlDoRnz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nTHrtOLDoRNZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: lCdVZS_k-eI/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: hQ6DylM3FaV/icon
import Icon4Icon from "./icons/PlasmicIcon__Icon4"; // plasmic-import: AFYVcv3lQLV/icon
import screenShot20230203At121144AMpngKxd4XO8PF from "./images/screenShot20230203At121144AMpng.png"; // plasmic-import: KXD4xO8pF/picture
import serviceCenterjpgPsSWqoY4O from "./images/serviceCenterjpg.jpeg"; // plasmic-import: PsSWqoY4O/picture

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  home?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tagline?: p.Flex<typeof Tagline>;
  coloredBodyTextColumns?: p.Flex<"div">;
  whiteBodyTextColumns?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  coloredBodyTextColumns2?: p.Flex<"div">;
  whiteBodyTextColumns2?: p.Flex<"div">;
  embedHtml?: p.Flex<typeof Embed>;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnTHrtOlDoRnz()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <div
            data-plasmic-name={"home"}
            data-plasmic-override={overrides.home}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.home
            )}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Tagline
              data-plasmic-name={"tagline"}
              data-plasmic-override={overrides.tagline}
              className={classNames("__wab_instance", sty.tagline)}
              slot={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__p50Gv
                  )}
                >
                  {
                    "KingCare serves children who face educational hardship brought on by inequity in King County. Join our cause now!"
                  }
                </div>
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rowEp
                )}
              >
                {"Equal Opportunity for Everyone."}
              </div>
            </Tagline>
            <Reveal
              className={classNames("__wab_instance", sty.reveal__xnWDe)}
              duration={2000 as const}
              triggerOnce={false}
            >
              <ParallaxWrapper
                className={classNames(
                  "__wab_instance",
                  sty.scrollParallax___5Id0K
                )}
                speed={5 as const}
              >
                <div
                  data-plasmic-name={"coloredBodyTextColumns"}
                  data-plasmic-override={overrides.coloredBodyTextColumns}
                  className={classNames(
                    projectcss.all,
                    sty.coloredBodyTextColumns
                  )}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__m98Sq)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__xfq1Y
                      )}
                    >
                      {"Why KingCare?"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qfAx7
                      )}
                    >
                      {
                        "Our mission is to empower and improve the lives of individuals and communities through personalized and compassionate educational services. We strive to create a supportive and inclusive environment where everyone has the opportunity to reach their full potential."
                      }
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button___15Prz
                      )}
                      link={`/take-action`}
                    >
                      {"Take action and improve King County"}
                    </Button>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__roLf8)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__veThK)}
                      displayHeight={"100%" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"100%" as const}
                      loading={"lazy" as const}
                      src={{
                        src: screenShot20230203At121144AMpngKxd4XO8PF,
                        fullWidth: 1304,
                        fullHeight: 1046,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </ParallaxWrapper>
            </Reveal>
            <ParallaxWrapper
              className={classNames(
                "__wab_instance",
                sty.scrollParallax__cFhft
              )}
              speed={5 as const}
            >
              <div
                data-plasmic-name={"whiteBodyTextColumns"}
                data-plasmic-override={overrides.whiteBodyTextColumns}
                className={classNames(projectcss.all, sty.whiteBodyTextColumns)}
              >
                <Reveal
                  className={classNames("__wab_instance", sty.reveal___9QsRc)}
                  duration={2000 as const}
                  triggerOnce={false}
                >
                  <ParallaxWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.scrollParallax__jLuiH
                    )}
                    speed={5 as const}
                  >
                    {true ? (
                      <div
                        data-plasmic-name={"freeBox"}
                        data-plasmic-override={overrides.freeBox}
                        className={classNames(projectcss.all, sty.freeBox)}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1__ngUtg
                          )}
                        >
                          {"How we serve King County"}
                        </h1>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__neMp6
                          )}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ color: "#000000" }}
                            >
                              {
                                "At our social service nonprofit, we are dedicated to making a positive impact on the King County community. By providing a range of educational programs and services across ages, we help to alleviate the challenges faced by those in need. Whether it's through providing access to resources, offering education and skill building opportunities, or simply being a supportive ear, we strive to make a difference in the lives of those we serve. Join us in our mission to strengthen and empower our King County community."
                              }
                            </span>
                          </React.Fragment>
                        </div>
                      </div>
                    ) : null}
                  </ParallaxWrapper>
                </Reveal>
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__yc0K)}
                  duration={2000 as const}
                  triggerOnce={false}
                >
                  <ParallaxWrapper
                    className={classNames(
                      "__wab_instance",
                      sty.scrollParallax___05PBh
                    )}
                    speed={5 as const}
                  >
                    <div
                      data-plasmic-name={"columns"}
                      data-plasmic-override={overrides.columns}
                      className={classNames(projectcss.all, sty.columns)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__z8DxI
                        )}
                      >
                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__cTuQs
                          )}
                          href={`/services`}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Technology Access & Digital Literacy"
                            : "Technology Access & Digital Literacy"}
                        </a>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column___6ZdUk
                        )}
                      >
                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__jnKtv
                          )}
                          href={`/services`}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Remedial Education & Tutoring"
                            : "Remedial Education & Tutoring\n"}
                        </a>
                      </div>
                      <div
                        className={classNames(projectcss.all, sty.column__fh1E)}
                      >
                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__fjC9
                          )}
                          href={`/services`}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "Mental Health & Counseling"
                            : "Mental Health & Counseling"}
                        </a>
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.column__eg14Q
                        )}
                      >
                        <a
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            sty.link__sJxTf
                          )}
                          disabled={true}
                          href={`/services`}
                        >
                          {hasVariant(globalVariants, "screen", "mobileOnly")
                            ? "College & Career Readiness"
                            : "College & Career Readiness"}
                        </a>
                      </div>
                    </div>
                  </ParallaxWrapper>
                </Reveal>
              </div>
            </ParallaxWrapper>
            <Reveal
              className={classNames("__wab_instance", sty.reveal___04Eq8)}
              duration={2000 as const}
              triggerOnce={false}
            >
              <ParallaxWrapper
                className={classNames(
                  "__wab_instance",
                  sty.scrollParallax__xlxjC
                )}
                speed={5 as const}
              >
                <div
                  data-plasmic-name={"coloredBodyTextColumns2"}
                  data-plasmic-override={overrides.coloredBodyTextColumns2}
                  className={classNames(
                    projectcss.all,
                    sty.coloredBodyTextColumns2
                  )}
                >
                  <div
                    className={classNames(projectcss.all, sty.column__a8Mmc)}
                  >
                    <h1
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1__qiKor
                      )}
                    >
                      {"Get in touch"}
                    </h1>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gfHj0
                      )}
                    >
                      {
                        "Want to learn more or have any complaints/suggestions? We would love to hear back from you! Feel free to come visit us at one of our three locations spread out through King County or send us a quick email and we will respond to you promptly. Please allow up to forty-eight hours for a response."
                      }
                    </div>
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__cy2V2
                      )}
                      link={`/get-in-touch`}
                    >
                      {"Learn More"}
                    </Button>
                  </div>
                  <div className={classNames(projectcss.all, sty.column__kGgi)}>
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___8VJaD)}
                      displayHeight={"599px" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"100%" as const}
                      loading={"lazy" as const}
                      src={{
                        src: serviceCenterjpgPsSWqoY4O,
                        fullWidth: 705,
                        fullHeight: 470,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </ParallaxWrapper>
            </Reveal>
            <Reveal
              className={classNames("__wab_instance", sty.reveal__frwXb)}
              duration={2000 as const}
              triggerOnce={false}
            >
              <ParallaxWrapper
                className={classNames(
                  "__wab_instance",
                  sty.scrollParallax__fk2PX
                )}
                speed={5 as const}
              >
                <div
                  data-plasmic-name={"whiteBodyTextColumns2"}
                  data-plasmic-override={overrides.whiteBodyTextColumns2}
                  className={classNames(
                    projectcss.all,
                    sty.whiteBodyTextColumns2
                  )}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__qhOox
                    )}
                  >
                    {"Subscribe to our newsletter"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8KiCj
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {
                          "Subscribe for weekly updates on community activity as well as resources you might find useful."
                        }
                      </span>
                    </React.Fragment>
                  </div>
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fffdf5; clear:left; font:14px Helvetica,Arial,sans-serif;  width:375px;}\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<style type="text/css">\r\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\r\n\t#mergeRow-gdpr {margin-top: 20px;}\r\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\r\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\r\n\t#font-family: Inter\r\n\t#text-align: center\r\n\t#margin: auto\r\n</style>\r\n<div id="mc_embed_signup" style="font-family: Inter; margin: auto; text-align: center">\r\n    <form action="https://hotmail.us21.list-manage.com/subscribe/post?u=e2b4dbc133397d49c88885733&amp;id=df26aa8da1&amp;v_id=98&amp;f_id=00d2ade1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        \r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">\r\n    <div class="content__gdpr">\r\n        \r\n        <p>Please select all the ways you would like to hear from :</p>\r\n        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">\r\n\t\t<label class="checkbox subfield" for="gdpr_982"><input type="checkbox" id="gdpr_982" name="gdpr[982]" value="Y" class="av-checkbox "><span>Email</span> </label>\r\n        </fieldset>\r\n        <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>\r\n    </div>\r\n    <div class="content__gdprLegal">\r\n        \r\n    </div>\r\n</div>\r\n\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e2b4dbc133397d49c88885733_df26aa8da1" tabindex="-1" value=""></div>\r\n        <div class="optionalParent" style="margin: auto;">\r\n            <div class="clear foot" style="margin: auto;">\r\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color:#0b6298; margin: auto">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                        : ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fffdf5; clear:left; font:14px Helvetica,Arial,sans-serif;  width:375px;}\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<style type="text/css">\r\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\r\n\t#mergeRow-gdpr {margin-top: 20px;}\r\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\r\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\r\n\t#font-family: Inter\r\n\t#text-align: center\r\n\t#margin: auto\r\n</style>\r\n<div id="mc_embed_signup" style="font-family: Inter; margin: auto; text-align: center">\r\n    <form action="https://hotmail.us21.list-manage.com/subscribe/post?u=e2b4dbc133397d49c88885733&amp;id=df26aa8da1&amp;v_id=98&amp;f_id=00d2ade1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        \r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>\r\n</div>\r\n<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">\r\n    <div class="content__gdpr">\r\n        \r\n        <p>Please select all the ways you would like to hear from :</p>\r\n        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">\r\n\t\t<label class="checkbox subfield" for="gdpr_982"><input type="checkbox" id="gdpr_982" name="gdpr[982]" value="Y" class="av-checkbox "><span>Email</span> </label>\r\n        </fieldset>\r\n        <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>\r\n    </div>\r\n    <div class="content__gdprLegal">\r\n        \r\n    </div>\r\n</div>\r\n\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e2b4dbc133397d49c88885733_df26aa8da1" tabindex="-1" value=""></div>\r\n        <div class="optionalParent" style="margin: auto;">\r\n            <div class="clear foot" style="margin: auto;">\r\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color:#0b6298; margin: auto">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                    }
                  />
                </div>
              </ParallaxWrapper>
            </Reveal>
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />

            <FooterBottom
              data-plasmic-name={"footerBottom"}
              data-plasmic-override={overrides.footerBottom}
              className={classNames("__wab_instance", sty.footerBottom)}
            />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  home: [
    "home",
    "header",
    "tagline",
    "coloredBodyTextColumns",
    "whiteBodyTextColumns",
    "freeBox",
    "columns",
    "coloredBodyTextColumns2",
    "whiteBodyTextColumns2",
    "embedHtml",
    "footer",
    "footerBottom"
  ],
  header: ["header"],
  tagline: ["tagline"],
  coloredBodyTextColumns: ["coloredBodyTextColumns"],
  whiteBodyTextColumns: ["whiteBodyTextColumns", "freeBox", "columns"],
  freeBox: ["freeBox"],
  columns: ["columns"],
  coloredBodyTextColumns2: ["coloredBodyTextColumns2"],
  whiteBodyTextColumns2: ["whiteBodyTextColumns2", "embedHtml"],
  embedHtml: ["embedHtml"],
  footer: ["footer"],
  footerBottom: ["footerBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  home: "div";
  header: typeof Header;
  tagline: typeof Tagline;
  coloredBodyTextColumns: "div";
  whiteBodyTextColumns: "div";
  freeBox: "div";
  columns: "div";
  coloredBodyTextColumns2: "div";
  whiteBodyTextColumns2: "div";
  embedHtml: typeof Embed;
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "home") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("home"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    tagline: makeNodeComponent("tagline"),
    coloredBodyTextColumns: makeNodeComponent("coloredBodyTextColumns"),
    whiteBodyTextColumns: makeNodeComponent("whiteBodyTextColumns"),
    freeBox: makeNodeComponent("freeBox"),
    columns: makeNodeComponent("columns"),
    coloredBodyTextColumns2: makeNodeComponent("coloredBodyTextColumns2"),
    whiteBodyTextColumns2: makeNodeComponent("whiteBodyTextColumns2"),
    embedHtml: makeNodeComponent("embedHtml"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
