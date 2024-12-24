export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BE8ap4ja.js","app":"_app/immutable/entry/app.NGycUnu1.js","imports":["_app/immutable/entry/start.BE8ap4ja.js","_app/immutable/chunks/entry.B3PGVmsW.js","_app/immutable/chunks/runtime.FD8xG2QE.js","_app/immutable/chunks/index.C9S6Eld7.js","_app/immutable/entry/app.NGycUnu1.js","_app/immutable/chunks/runtime.FD8xG2QE.js","_app/immutable/chunks/render.CasfLUrm.js","_app/immutable/chunks/disclose-version.BlHGoT9p.js","_app/immutable/chunks/if.BUEhq06W.js","_app/immutable/chunks/index-client.B-ZNRqsW.js","_app/immutable/chunks/props.BaBg2LSh.js","_app/immutable/chunks/this.BI31LKKY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/create_post",
				pattern: /^\/create_post\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/profile/[user_Id]",
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: [{"name":"user_Id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/signin",
				pattern: /^\/signin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
