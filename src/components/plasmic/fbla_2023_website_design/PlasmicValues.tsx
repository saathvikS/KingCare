// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3gFepDhbdVBaDHe3ms9CNF
// Component: tElkXYyv7hQ
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import { useScreenVariants as useScreenVariantsnTHrtOlDoRnz } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: nTHrtOLDoRNZ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fbla_2023_website_design.module.css"; // plasmic-import: 3gFepDhbdVBaDHe3ms9CNF/projectcss
import sty from "./PlasmicValues.module.css"; // plasmic-import: tElkXYyv7hQ/css

export type PlasmicValues__VariantMembers = {};
export type PlasmicValues__VariantsArgs = {};
type VariantPropType = keyof PlasmicValues__VariantsArgs;
export const PlasmicValues__VariantProps = new Array<VariantPropType>();

export type PlasmicValues__ArgsType = {};
type ArgPropType = keyof PlasmicValues__ArgsType;
export const PlasmicValues__ArgProps = new Array<ArgPropType>();

export type PlasmicValues__OverridesType = {
  serviceRow?: p.Flex<"div">;
};

export interface DefaultValuesProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicValues__RenderFunc(props: {
  variants: PlasmicValues__VariantsArgs;
  args: PlasmicValues__ArgsType;
  overrides: PlasmicValues__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsnTHrtOlDoRnz()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"serviceRow"}
      data-plasmic-override={overrides.serviceRow}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.serviceRow
      )}
    >
      <div className={classNames(projectcss.all, sty.column__oJkn1)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kdgro)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__w9MsY
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__lOw1B
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__nQFci)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__mhAB)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__reUhN
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.column__aT2H)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__e93CM)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__jxXYg
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__kzyNj
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__navRg)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__y1FvU)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zo4Su
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.column__ogke1)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__srDtK)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__ikJ8R
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__b3Yi
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__i8Yk2)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__alR4N)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__egkIi
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.column__y2UvD)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__dCbk9)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__dzCn4
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__bbUFa
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__uz5I)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__rk4HA)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tbJbC
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.column___0Phf)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__v7Ylf)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__r1FPw
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__lLyWv
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__cE7RZ)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__wRW)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3M4IJ
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>

      <div className={classNames(projectcss.all, sty.column__poew)}>
        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qsh9S)}
          >
            <h3
              className={classNames(
                projectcss.all,
                projectcss.h3,
                sty.h3__iAo6U
              )}
            >
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3___8CZs7
                )}
              >
                {"Value"}
              </h3>
            </h3>

            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__hmQ3)} />
            ) : null}

            <div className={classNames(projectcss.all, sty.freeBox__sn4UL)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mrAz
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
              </div>
            </div>
          </p.Stack>
        ) : null}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  serviceRow: ["serviceRow"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  serviceRow: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValues__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValues__VariantsArgs;
    args?: PlasmicValues__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValues__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicValues__ArgsType,
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
          internalArgPropNames: PlasmicValues__ArgProps,
          internalVariantPropNames: PlasmicValues__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicValues__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "serviceRow") {
    func.displayName = "PlasmicValues";
  } else {
    func.displayName = `PlasmicValues.${nodeName}`;
  }
  return func;
}

export const PlasmicValues = Object.assign(
  // Top-level PlasmicValues renders the root element
  makeNodeComponent("serviceRow"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValues
    internalVariantProps: PlasmicValues__VariantProps,
    internalArgProps: PlasmicValues__ArgProps
  }
);

export default PlasmicValues;
/* prettier-ignore-end */
