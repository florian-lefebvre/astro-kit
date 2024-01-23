import type { HookParameters } from "astro";
import { useHookContext } from "../internal/context.js";
import type { HookName } from "../internal/types.js";

export const useHookParams = <Hook extends HookName>(
	hook: Hook,
): HookParameters<Hook> => {
	const params = useHookContext()[hook];
	if (!params) {
		throw new Error(
			`\`useHookParams("${hook}")\` has not been called inside the "${hook}" hook.`,
		);
	}
	return params;
};
