// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: e0SGo-44ddg

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
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import DonateButton from "../../DonateButton"; // plasmic-import: 8qGb6ylmZB/component

import { useScreenVariants as useScreenVariantsnTHrtOlDoRnz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nTHrtOLDoRNZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: e0SGo-44ddg/css

import Icon29Icon from "./icons/PlasmicIcon__Icon29"; // plasmic-import: yC5RvH5pqG9N/icon
import image4XyYsKgnb from "./images/image4.png"; // plasmic-import: XY_ysKgnb/picture

export type PlasmicHeader__VariantMembers = {};
export type PlasmicHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader__ArgsType = {};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader__OverridesType = {
  header?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  aboutUs?: p.Flex<"a">;
  embedHtml?: p.Flex<typeof Embed>;
  donateButton?: p.Flex<typeof DonateButton>;
};

export interface DefaultHeaderProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
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
    <p.Stack
      as={"div"}
      data-plasmic-name={"header"}
      data-plasmic-override={overrides.header}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.header
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vsDjH)}
      >
        <a
          className={classNames(projectcss.all, projectcss.a, sty.link__u6Dc)}
          href={`/`}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"31px" as const}
            displayMaxHeight={"none" as const}
            displayMaxWidth={"100%" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: image4XyYsKgnb,
              fullWidth: 1225,
              fullHeight: 269,
              aspectRatio: undefined
            }}
          />
        </a>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___9RW1U)}
        >
          <p.Stack
            as={"a"}
            data-plasmic-name={"aboutUs"}
            data-plasmic-override={overrides.aboutUs}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.aboutUs)}
            href={`/about-us`}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__cSyEb)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qqjKm
              )}
            >
              {"About Us"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__oatht)}
                role={"img"}
              />
            ) : null}
          </p.Stack>
          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__nqJxg
            )}
            href={`/services`}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__o62Ut)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sh58E
              )}
            >
              {"Services"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__yc5Qf)}
                role={"img"}
              />
            ) : null}
          </p.Stack>
          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__u1D4N
            )}
            href={`/take-action`}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__iAcny)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__eqcM
              )}
            >
              {"Take action"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__q0SUg)}
                role={"img"}
              />
            ) : null}
          </p.Stack>
          <p.Stack
            as={"a"}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link___0MCW
            )}
            href={`/get-in-touch`}
          >
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__uIfz)}
                role={"img"}
              />
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ywFEw
              )}
            >
              {"get in touch"}
            </div>
            {false ? (
              <Icon29Icon
                className={classNames(projectcss.all, sty.svg__dr31N)}
                role={"img"}
              />
            ) : null}
          </p.Stack>
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              '<script async src="https://cse.google.com/cse.js?cx=77f75c640e1704f95">\r\n</script>\r\n<div class="gcse-search"></div>' as const
            }
          />
        </p.Stack>
        <DonateButton
          data-plasmic-name={"donateButton"}
          data-plasmic-override={overrides.donateButton}
          className={classNames("__wab_instance", sty.donateButton)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1Ku5B
            )}
          >
            {"DONATE"}
          </div>
        </DonateButton>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header: ["header", "img", "aboutUs", "embedHtml", "donateButton"],
  img: ["img"],
  aboutUs: ["aboutUs"],
  embedHtml: ["embedHtml"],
  donateButton: ["donateButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  header: "div";
  img: typeof p.PlasmicImg;
  aboutUs: "a";
  embedHtml: typeof Embed;
  donateButton: typeof DonateButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
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
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("header"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    aboutUs: makeNodeComponent("aboutUs"),
    embedHtml: makeNodeComponent("embedHtml"),
    donateButton: makeNodeComponent("donateButton"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
