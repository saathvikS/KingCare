// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: B2jGwOlICf

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
import sty from "./PlasmicEducationalServices.module.css"; // plasmic-import: B2jGwOlICf/css

export type PlasmicEducationalServices__VariantMembers = {};
export type PlasmicEducationalServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicEducationalServices__VariantsArgs;
export const PlasmicEducationalServices__VariantProps =
  new Array<VariantPropType>();

export type PlasmicEducationalServices__ArgsType = {};
type ArgPropType = keyof PlasmicEducationalServices__ArgsType;
export const PlasmicEducationalServices__ArgProps = new Array<ArgPropType>();

export type PlasmicEducationalServices__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tagline?: p.Flex<typeof Tagline>;
  freeBox?: p.Flex<"div">;
  embedHtml?: p.Flex<typeof Embed>;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultEducationalServicesProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicEducationalServices__RenderFunc(props: {
  variants: PlasmicEducationalServices__VariantsArgs;
  args: PlasmicEducationalServices__ArgsType;
  overrides: PlasmicEducationalServices__OverridesType;
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
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
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
                  sty.text__otVee
                )}
              >
                {
                  "KingCare is proud to offer various educational services with many more on the way to help out the underprivileged in our community. If you are in need of one of these services, please do not hesitate to reach out to us."
                }
              </div>
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c11K
              )}
            >
              {"Educational Services"}
            </div>
          </Tagline>
          <Reveal
            className={classNames("__wab_instance", sty.reveal___0Z4Za)}
            duration={2000 as const}
            triggerOnce={false}
          >
            <ParallaxWrapper
              className={classNames(
                "__wab_instance",
                sty.scrollParallax__vGxVt
              )}
              speed={5 as const}
            >
              {true ? (
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nm3V1
                    )}
                  >
                    {"Book a FREE Initial Consultation"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ducru
                    )}
                  >
                    {
                      "Talk to a KingCare representative to plan the right path for you. We will help you determine which of our services could be potentially beneficial for you in a 30 minute consultation on phone call or at a KingCare center."
                    }
                  </div>
                  <Embed
                    data-plasmic-name={"embedHtml"}
                    data-plasmic-override={overrides.embedHtml}
                    className={classNames("__wab_instance", sty.embedHtml)}
                    code={
                      '<script id="setmore_script" type="text/javascript" src="https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js"></script><a style="float:none; " id="Setmore_button_iframe"  href="https://booking.setmore.com/scheduleappointment/85c13010-fe48-4f3f-805c-6ed87de35082"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Saathvik Somujayabalan using Setmore"/></a>' as const
                    }
                  />
                </div>
              ) : null}
              <div className={classNames(projectcss.all, sty.columns__zSxU)}>
                <div className={classNames(projectcss.all, sty.column__r3I4)} />

                <div className={classNames(projectcss.all, sty.column___8ELnG)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__za0Mu
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Technology Access & \nDigital Literacy"
                      : "Technology Access & Digital Literacy"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cNgtp
                    )}
                  >
                    {
                      "Our Technology Access and Digital Literacy Program provides equitable access to modern technology and empowers diverse learners with essential digital skills. Through hands-on training and resources, participants gain competency in using technology for education, employment, and civic engagement. Join us to bridge the digital divide, foster digital inclusion, and thrive in the digital world!"
                    }
                  </div>
                </div>
              </div>
            </ParallaxWrapper>
          </Reveal>
          <Reveal
            className={classNames("__wab_instance", sty.reveal__bxqmz)}
            duration={2000 as const}
            triggerOnce={false}
          >
            <ParallaxWrapper
              className={classNames(
                "__wab_instance",
                sty.scrollParallax__sFeJd
              )}
              speed={5 as const}
            >
              <div className={classNames(projectcss.all, sty.columns__tqayH)}>
                {(
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.column__tReEn)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___50Mr1
                      )}
                    >
                      {"Remedial Education & Tutoring"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__ry0Oe
                      )}
                    >
                      {
                        "Our Remedial Education Program offers targeted support for learners to overcome academic challenges and achieve their full potential. Through personalized instruction and tailored interventions, participants receive individualized attention to strengthen foundational skills in areas such as reading, writing, and math. Our experienced instructors provide patient and supportive guidance, empowering learners to catch up and progress in their academic journey. Unlock your full potential and achieve academic success with our Remedial Education Program!"
                      }
                    </div>
                  </div>
                ) : null}
                <div className={classNames(projectcss.all, sty.column__cs4Ak)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mOUm
                      )}
                    >
                      {"Enter some text"}
                    </div>
                  ) : null}
                </div>
              </div>
            </ParallaxWrapper>
          </Reveal>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___1LeHm
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Remedial Education & Tutoring"
                : "Technology Access & Digital Literacy"}
            </div>
          ) : null}
          {true ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c5Mrk
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "Enjoy single-family homes, multi-family homes, condos, and apartments thanks to KingCare's partnerships among housing groups. As always, we appreciate any potential partnerships - please contact us for further inquiries. If you are in need of some permanent shelter, send us an email or come visit one of our locations and our staff members will assist you."
                : ""}
            </div>
          ) : null}
          <Reveal
            className={classNames("__wab_instance", sty.reveal___6Mdh)}
            duration={2000 as const}
            triggerOnce={false}
          >
            <ParallaxWrapper
              className={classNames(
                "__wab_instance",
                sty.scrollParallax__kr9Jv
              )}
              speed={5 as const}
            >
              <div className={classNames(projectcss.all, sty.columns__rFmD5)}>
                <div
                  className={classNames(projectcss.all, sty.column___58M0)}
                />

                <div className={classNames(projectcss.all, sty.column__onqAq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lL42
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Mental Health & Counseling"
                      : "Mental Health & Counseling"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__koOmk
                    )}
                  >
                    {
                      "Our Mental Health and Counseling Program provides compassionate support for individuals seeking to improve their mental well-being. Our experienced counselors offer personalized therapy sessions, tailored interventions, and evidence-based techniques to address a wide range of mental health concerns. We prioritize confidentiality, respect, and empathy in a safe and non-judgmental environment."
                    }
                  </div>
                </div>
              </div>
            </ParallaxWrapper>
          </Reveal>
          <div className={classNames(projectcss.all, sty.columns__wyL9L)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div className={classNames(projectcss.all, sty.column__wfxxD)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ja5BP
                  )}
                >
                  {"College & Career Readiness"}
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fM9O
                  )}
                >
                  {
                    "Our College and Career Readiness Program equips individuals with the skills and resources needed to succeed in higher education and the workforce. Through workshops, coaching, and guidance, participants develop critical thinking, problem-solving, and communication skills. Our program offers personalized support for college and career exploration, application assistance, and interview preparation. Join us to gain the tools and confidence needed for success in college and career pathways, and achieve your academic and professional goals!"
                  }
                </div>
              </div>
            ) : null}
            <div className={classNames(projectcss.all, sty.column__qw6Zq)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f4Hvc
                  )}
                >
                  {"Enter some text"}
                </div>
              ) : null}
            </div>
          </div>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__c1BfO
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "College & Career Readiness"
                : "Mental Health & Counseling"}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__h5Azz
              )}
            >
              {
                "Our Mental Health and Counseling Program provides compassionate support for individuals seeking to improve their mental well-being. Our experienced counselors offer personalized therapy sessions, tailored interventions, and evidence-based techniques to address a wide range of mental health concerns. We prioritize confidentiality, respect, and empathy in a safe and non-judgmental environment."
              }
            </div>
          ) : null}
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "tagline",
    "freeBox",
    "embedHtml",
    "footer",
    "footerBottom"
  ],
  header: ["header"],
  tagline: ["tagline"],
  freeBox: ["freeBox", "embedHtml"],
  embedHtml: ["embedHtml"],
  footer: ["footer"],
  footerBottom: ["footerBottom"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  tagline: typeof Tagline;
  freeBox: "div";
  embedHtml: typeof Embed;
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEducationalServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEducationalServices__VariantsArgs;
    args?: PlasmicEducationalServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEducationalServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEducationalServices__ArgsType,
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
          internalArgPropNames: PlasmicEducationalServices__ArgProps,
          internalVariantPropNames: PlasmicEducationalServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEducationalServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEducationalServices";
  } else {
    func.displayName = `PlasmicEducationalServices.${nodeName}`;
  }
  return func;
}

export const PlasmicEducationalServices = Object.assign(
  // Top-level PlasmicEducationalServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    tagline: makeNodeComponent("tagline"),
    freeBox: makeNodeComponent("freeBox"),
    embedHtml: makeNodeComponent("embedHtml"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicEducationalServices
    internalVariantProps: PlasmicEducationalServices__VariantProps,
    internalArgProps: PlasmicEducationalServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Services",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicEducationalServices;
/* prettier-ignore-end */
