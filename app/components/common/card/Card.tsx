import { spacing } from "../spacing"
import { PropsWithChildren } from "react"

export const Card = ({ children, ...rest }: PropsWithChildren<{}>) => (
  <>
    <div {...rest}>{children}</div>

    <style jsx>{`
      div {
        width: 10rem;
        height: 10rem;
        padding: ${spacing.s16};
        display: flex;
        align-items: flex-end;
        border-radius: ${spacing.s8};
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
      }
    `}</style>
  </>
)
