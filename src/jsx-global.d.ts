// React 19 removed the global JSX namespace; this keeps the
// existing `(): JSX.Element` return types working unchanged
import type { JSX as ReactJSX } from "react";

declare global {
	namespace JSX {
		type Element = ReactJSX.Element;
	}
}
