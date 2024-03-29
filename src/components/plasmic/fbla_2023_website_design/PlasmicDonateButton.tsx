// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: 8qGb6ylmZB

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicDonateButton.module.css"; // plasmic-import: 8qGb6ylmZB/css

export type PlasmicDonateButton__VariantMembers = {};
export type PlasmicDonateButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicDonateButton__VariantsArgs;
export const PlasmicDonateButton__VariantProps = new Array<VariantPropType>();

export type PlasmicDonateButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicDonateButton__ArgsType;
export const PlasmicDonateButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicDonateButton__OverridesType = {
  root?: p.Flex<"a">;
};

export interface DefaultDonateButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicDonateButton__RenderFunc(props: {
  variants: PlasmicDonateButton__VariantsArgs;
  args: PlasmicDonateButton__ArgsType;
  overrides: PlasmicDonateButton__OverridesType;
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
    <a
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      href={"https://donate.stripe.com/test_dR66sqdTmaeC28ofYY" as const}
      target={"_blank" as const}
    >
      {p.renderPlasmicSlot({
        defaultContents: "DONATE",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </a>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDonateButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDonateButton__VariantsArgs;
    args?: PlasmicDonateButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDonateButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDonateButton__ArgsType,
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
          internalArgPropNames: PlasmicDonateButton__ArgProps,
          internalVariantPropNames: PlasmicDonateButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDonateButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDonateButton";
  } else {
    func.displayName = `PlasmicDonateButton.${nodeName}`;
  }
  return func;
}

export const PlasmicDonateButton = Object.assign(
  // Top-level PlasmicDonateButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDonateButton
    internalVariantProps: PlasmicDonateButton__VariantProps,
    internalArgProps: PlasmicDonateButton__ArgProps
  }
);

export default PlasmicDonateButton;
/* prettier-ignore-end */
