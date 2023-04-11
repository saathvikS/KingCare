// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: ahO08vCw02

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
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import Footer from "../../Footer"; // plasmic-import: EdywSuH81fY/component
import FooterBottom from "../../FooterBottom"; // plasmic-import: 5nUaKoc582/component

import { useScreenVariants as useScreenVariantsnTHrtOlDoRnz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nTHrtOLDoRNZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicGetInTouch.module.css"; // plasmic-import: ahO08vCw02/css

import image7UwWYdPeKtDl from "./images/image7.jpeg"; // plasmic-import: UwW_ydPEKtDL/picture

export type PlasmicGetInTouch__VariantMembers = {};
export type PlasmicGetInTouch__VariantsArgs = {};
type VariantPropType = keyof PlasmicGetInTouch__VariantsArgs;
export const PlasmicGetInTouch__VariantProps = new Array<VariantPropType>();

export type PlasmicGetInTouch__ArgsType = {};
type ArgPropType = keyof PlasmicGetInTouch__ArgsType;
export const PlasmicGetInTouch__ArgProps = new Array<ArgPropType>();

export type PlasmicGetInTouch__OverridesType = {
  root?: p.Flex<"div">;
  pageBanner?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tagline?: p.Flex<typeof Tagline>;
  text?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  container4?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultGetInTouchProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGetInTouch__RenderFunc(props: {
  variants: PlasmicGetInTouch__VariantsArgs;
  args: PlasmicGetInTouch__ArgsType;
  overrides: PlasmicGetInTouch__OverridesType;
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
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          </div>
          <Tagline
            data-plasmic-name={"tagline"}
            data-plasmic-override={overrides.tagline}
            className={classNames("__wab_instance", sty.tagline)}
            slot={
              "Want to learn more or have any complaints/suggestions? We would love to hear back from you! Feel free to come visit us at one of our three locations spread out through King County or send us a quick email and we will respond to you promptly. Please allow up to forty-eight hours for a response."
            }
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text
              )}
            >
              {"Get in Touch"}
            </div>
          </Tagline>
          <div className={classNames(projectcss.all, sty.freeBox__eWzyy)}>
            <Reveal
              className={classNames("__wab_instance", sty.reveal__h65Ad)}
              duration={1500 as const}
              triggerOnce={false}
            >
              <ParallaxWrapper
                className={classNames(
                  "__wab_instance",
                  sty.scrollParallax__i6J3
                )}
                speed={5 as const}
              >
                <h2
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2__adtUg
                  )}
                >
                  {"Come visit us at one of our locations"}
                </h2>
              </ParallaxWrapper>
            </Reveal>
            <div className={classNames(projectcss.all, sty.freeBox__jtl71)}>
              <ParallaxWrapper
                className={classNames(
                  "__wab_instance",
                  sty.scrollParallax__zbVu3
                )}
                speed={10 as const}
              >
                <Reveal
                  className={classNames("__wab_instance", sty.reveal__n1RbS)}
                  duration={1500 as const}
                  triggerOnce={false}
                >
                  <Embed
                    className={classNames(
                      "__wab_instance",
                      sty.embedHtml__jwlKa
                    )}
                    code={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ('<iframe src="https://www.google.com/maps/d/embed?mid=1YdZGbSPxpRcsoGQK_-uMkW04xJQfEZQ&ehbc=2E312F" width="300" height="390"></iframe>' as const)
                        : ('<iframe src="https://www.google.com/maps/d/embed?mid=1YdZGbSPxpRcsoGQK_-uMkW04xJQfEZQ&ehbc=2E312F" width="1320" height="480"></iframe>' as const)
                    }
                  />
                </Reveal>
              </ParallaxWrapper>
            </div>
          </div>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__n5OS)}>
              <Reveal
                className={classNames("__wab_instance", sty.reveal__fW2XN)}
                duration={2000 as const}
                triggerOnce={false}
              >
                <div
                  data-plasmic-name={"columns"}
                  data-plasmic-override={overrides.columns}
                  className={classNames(projectcss.all, sty.columns)}
                >
                  <div className={classNames(projectcss.all, sty.column__nEyt)}>
                    <div
                      data-plasmic-name={"container4"}
                      data-plasmic-override={overrides.container4}
                      className={classNames(projectcss.all, sty.container4)}
                    >
                      <ParallaxWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.scrollParallax__k2KVn
                        )}
                        speed={5 as const}
                      >
                        <h2
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2__ugx0D
                          )}
                        >
                          {"Send us a message"}
                        </h2>
                      </ParallaxWrapper>
                      <Embed
                        className={classNames(
                          "__wab_instance",
                          sty.embedHtml__oLg2W
                        )}
                        code={
                          hasVariant(globalVariants, "screen", "mobileOnly")
                            ? ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<div id="mc_embed_signup"style="font-family: Mako;">\r\n    <form action="https://hotmail.us21.list-manage.com/subscribe/post?u=e2b4dbc133397d49c88885733&amp;id=4312483685&amp;f_id=0022d1e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        \r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text">Ex. s-ssomujayabalan@lwsd.org</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text">Ex. Saathvik</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text">Ex. Somujayabalan</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-MMERGE7">Subject  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="MMERGE7" class="required" id="mce-MMERGE7" required>\r\n\t<span id="mce-MMERGE7-HELPERTEXT" class="helper_text">Subject of your message</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-MMERGE6">Message  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="MMERGE6" class="required" id="mce-MMERGE6" required>\r\n\t<span id="mce-MMERGE6-HELPERTEXT" class="helper_text">Send your message to us in here</span>\r\n</div>\r\n\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e2b4dbc133397d49c88885733_4312483685" tabindex="-1" value=""></div>\r\n        <div class="optionalParent">\r\n            <div class="clear foot">\r\n                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color:#0b6298;">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';fnames[5]=\'BIRTHDAY\';ftypes[5]=\'birthday\';fnames[6]=\'MMERGE6\';ftypes[6]=\'text\';fnames[7]=\'MMERGE7\';ftypes[7]=\'text\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                            : ('<!-- Begin Mailchimp Signup Form -->\r\n<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\r\n<style type="text/css">\r\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\r\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\r\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\r\n</style>\r\n<div id="mc_embed_signup"style="font-family: Mako;">\r\n    <form action="https://hotmail.us21.list-manage.com/subscribe/post?u=e2b4dbc133397d49c88885733&amp;id=4312483685&amp;f_id=0022d1e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\r\n        <div id="mc_embed_signup_scroll">\r\n        \r\n        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\r\n\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text">Ex. s-ssomujayabalan@lwsd.org</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-FNAME">First Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>\r\n\t<span id="mce-FNAME-HELPERTEXT" class="helper_text">Ex. Saathvik</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>\r\n\t<span id="mce-LNAME-HELPERTEXT" class="helper_text">Ex. Somujayabalan</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-MMERGE7">Subject  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="MMERGE7" class="required" id="mce-MMERGE7" required>\r\n\t<span id="mce-MMERGE7-HELPERTEXT" class="helper_text">Subject of your message</span>\r\n</div>\r\n<div class="mc-field-group">\r\n\t<label for="mce-MMERGE6">Message  <span class="asterisk">*</span>\r\n</label>\r\n\t<input type="text" value="" name="MMERGE6" class="required" id="mce-MMERGE6" required>\r\n\t<span id="mce-MMERGE6-HELPERTEXT" class="helper_text">Send your message to us in here</span>\r\n</div>\r\n\t<div id="mce-responses" class="clear foot">\r\n\t\t<div class="response" id="mce-error-response" style="display:none"></div>\r\n\t\t<div class="response" id="mce-success-response" style="display:none"></div>\r\n\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e2b4dbc133397d49c88885733_4312483685" tabindex="-1" value=""></div>\r\n        <div class="optionalParent">\r\n            <div class="clear foot">\r\n                <input type="submit" value="Send Message" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color:#0b6298;">\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]=\'EMAIL\';ftypes[0]=\'email\';fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[3]=\'ADDRESS\';ftypes[3]=\'address\';fnames[4]=\'PHONE\';ftypes[4]=\'phone\';fnames[5]=\'BIRTHDAY\';ftypes[5]=\'birthday\';fnames[6]=\'MMERGE6\';ftypes[6]=\'text\';fnames[7]=\'MMERGE7\';ftypes[7]=\'text\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>\r\n<!--End mc_embed_signup-->' as const)
                        }
                      />
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.column__b8Se2)}
                  >
                    <p.PlasmicImg
                      data-plasmic-name={"img"}
                      data-plasmic-override={overrides.img}
                      alt={""}
                      className={classNames(sty.img)}
                      displayHeight={"100%" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"100%" as const}
                      loading={"lazy" as const}
                      src={{
                        src: image7UwWYdPeKtDl,
                        fullWidth: 1920,
                        fullHeight: 1280,
                        aspectRatio: undefined
                      }}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          ) : null}
          <div className={classNames(projectcss.all, sty.freeBox__sEsCb)}>
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
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "pageBanner",
    "header",
    "tagline",
    "text",
    "columns",
    "container4",
    "img",
    "footer",
    "footerBottom"
  ],
  pageBanner: ["pageBanner", "header"],
  header: ["header"],
  tagline: ["tagline", "text"],
  text: ["text"],
  columns: ["columns", "container4", "img"],
  container4: ["container4"],
  img: ["img"],
  footer: ["footer"],
  footerBottom: ["footerBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageBanner: "div";
  header: typeof Header;
  tagline: typeof Tagline;
  text: "div";
  columns: "div";
  container4: "div";
  img: typeof p.PlasmicImg;
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGetInTouch__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGetInTouch__VariantsArgs;
    args?: PlasmicGetInTouch__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGetInTouch__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGetInTouch__ArgsType,
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
          internalArgPropNames: PlasmicGetInTouch__ArgProps,
          internalVariantPropNames: PlasmicGetInTouch__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicGetInTouch__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGetInTouch";
  } else {
    func.displayName = `PlasmicGetInTouch.${nodeName}`;
  }
  return func;
}

export const PlasmicGetInTouch = Object.assign(
  // Top-level PlasmicGetInTouch renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    pageBanner: makeNodeComponent("pageBanner"),
    header: makeNodeComponent("header"),
    tagline: makeNodeComponent("tagline"),
    text: makeNodeComponent("text"),
    columns: makeNodeComponent("columns"),
    container4: makeNodeComponent("container4"),
    img: makeNodeComponent("img"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicGetInTouch
    internalVariantProps: PlasmicGetInTouch__VariantProps,
    internalArgProps: PlasmicGetInTouch__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicGetInTouch;
/* prettier-ignore-end */
