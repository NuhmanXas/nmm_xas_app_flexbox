import styled from "styled-components";

/**
 * A flexible box component for layout.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className=""] - Additional CSS classes.
 * @param {"d-flex" | "d-inline-flex" | "d-sm-flex" | "d-sm-inline-flex" | "d-md-flex" | "d-md-inline-flex" | "d-lg-flex" | "d-lg-inline-flex" | "d-xl-flex" | "d-xl-inline-flex" | "d-xxl-flex" | "d-xxl-inline-flex"} [props.flexType="d-flex"] - Flex display type.
 * @param {"flex-row" | "flex-row-reverse" | "flex-column" | "flex-column-reverse" | "flex-sm-row" | "flex-sm-row-reverse" | "flex-sm-column" | "flex-sm-column-reverse" | "flex-md-row" | "flex-md-row-reverse" | "flex-md-column" | "flex-md-column-reverse" | "flex-lg-row" | "flex-lg-row-reverse" | "flex-lg-column" | "flex-lg-column-reverse" | "flex-xl-row" | "flex-xl-row-reverse" | "flex-xl-column" | "flex-xl-column-reverse" | "flex-xxl-row" | "flex-xxl-row-reverse" | "flex-xxl-column" | "flex-xxl-column-reverse"} [props.direction=""] - Flex direction.
 * @param {"justify-content-start" | "justify-content-end" | "justify-content-center" | "justify-content-between" | "justify-content-around" | "justify-content-evenly" | "justify-content-sm-start" | "justify-content-sm-end" | "justify-content-sm-center" | "justify-content-sm-between" | "justify-content-sm-around" | "justify-content-sm-evenly" | "justify-content-md-start" | "justify-content-md-end" | "justify-content-md-center" | "justify-content-md-between" | "justify-content-md-around" | "justify-content-md-evenly" | "justify-content-lg-start" | "justify-content-lg-end" | "justify-content-lg-center" | "justify-content-lg-between" | "justify-content-lg-around" | "justify-content-lg-evenly" | "justify-content-xl-start" | "justify-content-xl-end" | "justify-content-xl-center" | "justify-content-xl-between" | "justify-content-xl-around" | "justify-content-xl-evenly" | "justify-content-xxl-start" | "justify-content-xxl-end" | "justify-content-xxl-center" | "justify-content-xxl-between" | "justify-content-xxl-around" | "justify-content-xxl-evenly"} [props.justifyContent=""] - Justify content setting.
 * @param {"align-items-start" | "align-items-end" | "align-items-center" | "align-items-baseline" | "align-items-stretch" | "align-items-sm-start" | "align-items-sm-end" | "align-items-sm-center" | "align-items-sm-baseline" | "align-items-sm-stretch" | "align-items-md-start" | "align-items-md-end" | "align-items-md-center" | "align-items-md-baseline" | "align-items-md-stretch" | "align-items-lg-start" | "align-items-lg-end" | "align-items-lg-center" | "align-items-lg-baseline" | "align-items-lg-stretch" | "align-items-xl-start" | "align-items-xl-end" | "align-items-xl-center" | "align-items-xl-baseline" | "align-items-xl-stretch" | "align-items-xxl-start" | "align-items-xxl-end" | "align-items-xxl-center" | "align-items-xxl-baseline" | "align-items-xxl-stretch"} [props.alignItems=""] - Align items setting.
 * @param {"align-self-start" | "align-self-end" | "align-self-center" | "align-self-baseline" | "align-self-stretch" | "align-self-sm-start" | "align-self-sm-end" | "align-self-sm-center" | "align-self-sm-baseline" | "align-self-sm-stretch" | "align-self-md-start" | "align-self-md-end" | "align-self-md-center" | "align-self-md-baseline" | "align-self-md-stretch" | "align-self-lg-start" | "align-self-lg-end" | "align-self-lg-center" | "align-self-lg-baseline" | "align-self-lg-stretch" | "align-self-xl-start" | "align-self-xl-end" | "align-self-xl-center" | "align-self-xl-baseline" | "align-self-xl-stretch" | "align-self-xxl-start" | "align-self-xxl-end" | "align-self-xxl-center" | "align-self-xxl-baseline" | "align-self-xxl-stretch"} [props.alignSelf=""] - Align self setting.
 * @param {"flex-fill" | "flex-sm-fill" | "flex-md-fill" | "flex-lg-fill" | "flex-xl-fill" | "flex-xxl-fill"} [props.fill=""] - Flex fill setting.
 * @param {"ms-auto"} [props.autoMargins=""] - Auto margins setting.
 * @param {"flex-wrap" | "flex-nowrap" | "flex-wrap-reverse" | "flex-sm-nowrap" | "flex-sm-wrap" | "flex-sm-wrap-reverse" | "flex-md-nowrap" | "flex-md-wrap" | "flex-md-wrap-reverse" | "flex-lg-nowrap" | "flex-lg-wrap" | "flex-lg-wrap-reverse" | "flex-xl-nowrap" | "flex-xl-wrap" | "flex-xl-wrap-reverse" | "flex-xxl-nowrap" | "flex-xxl-wrap" | "flex-xxl-wrap-reverse"} [props.wrap=""] - Flex wrap setting.
 * @param {"order-" | "order-1" | "order-0" | "order-1" | "order-2" | "order-3" | "order-4" | "order-5" | "order-sm-0" | "order-sm-1" | "order-sm-2" | "order-sm-3" | "order-sm-4" | "order-sm-5" | "order-md-0" | "order-md-1" | "order-md-2" | "order-md-3" | "order-md-4" | "order-md-5" | "order-lg-0" | "order-lg-1" | "order-lg-2" | "order-lg-3" | "order-lg-4" | "order-lg-5" | "order-xl-0" | "order-xl-1" | "order-xl-2" | "order-xl-3" | "order-xl-4" | "order-xl-5" | "order-xxl-0" | "order-xxl-1" | "order-xxl-2" | "order-xxl-3" | "order-xxl-4" | "order-xxl-5" | "order-first" | "order-last" | "order-sm-first" | "order-sm-last" | "order-md-first" | "order-md-last" | "order-lg-first" | "order-lg-last" | "order-xl-first" | "order-xl-last" | "order-xxl-first" | "order-xxl-last"} [props.order=""] - Flex order setting.
 * @param {"align-content-start" | "align-content-end" | "align-content-center" | "align-content-between" | "align-content-around" | "align-content-stretch" | "align-content-sm-start" | "align-content-sm-end" | "align-content-sm-center" | "align-content-sm-around" | "align-content-sm-stretch" | "align-content-md-start" | "align-content-md-end" | "align-content-md-center" | "align-content-md-around" | "align-content-md-stretch" | "align-content-lg-start" | "align-content-lg-end" | "align-content-lg-center" | "align-content-lg-around" | "align-content-lg-stretch" | "align-content-xl-start" | "align-content-xl-end" | "align-content-xl-center" | "align-content-xl-around" | "align-content-xl-stretch" | "align-content-xxl-start" | "align-content-xxl-end" | "align-content-xxl-center" | "align-content-xxl-around" | "align-content-xxl-stretch"} [props.alignContent=""] - Align content setting.
 * @param {any} [props.style={}] - Inline styles.
 * @param {React.ReactNode} props.children - Child nodes.
 * @returns {React.ReactNode} The rendered component.
 */
function AppFlexBox({
  className = "",
  flexType = "d-flex",
  direction = "",
  justifyContent = "",
  alignItems = "",
  alignSelf = "",
  fill = "",
  autoMargins = "",
  wrap = "",
  order = "",
  alignContent = "",
  style = {},
  children,
  ...props
}) {
  return (
    <AppFlexBoxStyled
      className={`${className} ${flexType} ${direction} ${justifyContent} ${alignItems} ${alignSelf} ${fill} ${autoMargins} ${wrap} ${order} ${alignContent}`}
      style={style}
      {...props}
    >
      {children}
    </AppFlexBoxStyled>
  );
}

export default AppFlexBox;

const AppFlexBoxStyled = styled.div`
  position: relative;
  /* Additional styles can be added here */
`;
