// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: 0NfgCekfoz

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
import Footer from "../../Footer"; // plasmic-import: EdywSuH81fY/component
import FooterBottom from "../../FooterBottom"; // plasmic-import: 5nUaKoc582/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicTermsOfService.module.css"; // plasmic-import: 0NfgCekfoz/css

export type PlasmicTermsOfService__VariantMembers = {};
export type PlasmicTermsOfService__VariantsArgs = {};
type VariantPropType = keyof PlasmicTermsOfService__VariantsArgs;
export const PlasmicTermsOfService__VariantProps = new Array<VariantPropType>();

export type PlasmicTermsOfService__ArgsType = {};
type ArgPropType = keyof PlasmicTermsOfService__ArgsType;
export const PlasmicTermsOfService__ArgProps = new Array<ArgPropType>();

export type PlasmicTermsOfService__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  tagline?: p.Flex<typeof Tagline>;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
  footerBottom?: p.Flex<typeof FooterBottom>;
};

export interface DefaultTermsOfServiceProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTermsOfService__RenderFunc(props: {
  variants: PlasmicTermsOfService__VariantsArgs;
  args: PlasmicTermsOfService__ArgsType;
  overrides: PlasmicTermsOfService__OverridesType;
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

  return (
    <React.Fragment>
      {}

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
          >
            {"Terms of Service"}
          </Tagline>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Terms of Service"}
          </h1>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {
              'By using our website, you agree to the following terms and conditions:\n\n\r\n\r\nUse of Website: Our website is intended for use by individuals who are interested in learning about ways to reduce the inequality gap between the rich and the poor in our local county. You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others.\n\n\r\n\r\nUser Content: You are solely responsible for any content that you post on our website. By posting content on our website, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, reproduce, and distribute your content. You represent and warrant that you have all necessary rights to post the content and that the content does not violate any laws or infringe upon the rights of any third party.\n\n\r\n\r\nIntellectual Property: All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of our website or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not use, copy, reproduce, or distribute any content on our website without our express written consent.\n\n\r\n\r\nDisclaimer of Warranties: Our website is provided "as is" without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, or that any defects in our website will be corrected. We do not warrant that the content on our website is accurate, complete, or up-to-date.\n\n\r\n\r\nLimitation of Liability: We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website. In no event shall our liability exceed the amount paid by you, if any, for accessing our website.\n\n\r\n\r\nIndemnification: You agree to indemnify and hold us harmless from any claim, demand, or damage, including reasonable attorneys\' fees, arising out of or in connection with your use of our website or your violation of these terms and conditions.\r\n\n\r\nModification of Terms: We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of our website after the modifications have been made constitutes your acceptance of the new terms and conditions.\n\n\r\n\r\nGoverning Law: These terms and conditions shall be governed by and construed in accordance with the laws of the county where our website is based.'
            }
          </div>
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
  root: ["root", "header", "tagline", "h1", "text", "footer", "footerBottom"],
  header: ["header"],
  tagline: ["tagline"],
  h1: ["h1"],
  text: ["text"],
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
  h1: "h1";
  text: "div";
  footer: typeof Footer;
  footerBottom: typeof FooterBottom;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTermsOfService__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTermsOfService__VariantsArgs;
    args?: PlasmicTermsOfService__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTermsOfService__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTermsOfService__ArgsType,
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
          internalArgPropNames: PlasmicTermsOfService__ArgProps,
          internalVariantPropNames: PlasmicTermsOfService__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTermsOfService__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTermsOfService";
  } else {
    func.displayName = `PlasmicTermsOfService.${nodeName}`;
  }
  return func;
}

export const PlasmicTermsOfService = Object.assign(
  // Top-level PlasmicTermsOfService renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    tagline: makeNodeComponent("tagline"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    footer: makeNodeComponent("footer"),
    footerBottom: makeNodeComponent("footerBottom"),

    // Metadata about props expected for PlasmicTermsOfService
    internalVariantProps: PlasmicTermsOfService__VariantProps,
    internalArgProps: PlasmicTermsOfService__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTermsOfService;
/* prettier-ignore-end */
