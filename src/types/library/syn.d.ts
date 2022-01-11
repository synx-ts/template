interface syn {
	cache_replace: (obj: Instance, t_obj: Instance) => void;
	cache_invalidate: (obj: Instance) => void;
	set_thread_identity: (identity: number) => void;
	get_thread_identity: () => number;
	is_cached: (obj: Instance) => boolean;
	write_clipboard: (content: string) => void;
	queue_on_teleport: (code: string) => void;
	protect_gui: (obj: Instance) => void;
	unprotect_gui: (obj: Instance) => void;
	is_beta: () => boolean;
	request: (data: { Url: string; Method?: string; Headers?: {}; Cookies?: {}; Body?: string }) => {
		Success: boolean;
		StatusCode: number;
		StatusMessage: string;
		Headers: {};
		Cookies: {};
		Body: string;
	};
	secure_call: <F extends (...args: unknown[]) => unknown[]>(
		func: F,
		script: LocalScript | ModuleScript,
		...args: LuaTuple<ReturnType<F>>
	) => void;
}
declare const syn: syn;
