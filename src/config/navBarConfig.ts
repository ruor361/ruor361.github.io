import {
	type NavBarConfig,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
			name: "主页",
			url: "/",
			icon: "material-symbols:home-rounded",
		},
		{
			name: "随笔",
			url: "/archive/?category=%E9%9A%8F%E7%AC%94",
			icon: "material-symbols:edit-note-rounded",
		},
		{
			name: "播客",
			url: "/archive/?category=%E6%92%AD%E5%AE%A2",
			icon: "material-symbols:podcasts-rounded",
		},
		{
			name: "Vlog",
			url: "/archive/?category=Vlog",
			icon: "material-symbols:movie-rounded",
		},
		{
			name: "归档",
			url: "/archive/",
			icon: "material-symbols:archive-rounded",
		},
		{
			name: "关于",
			url: "/about/",
			icon: "material-symbols:person-rounded",
		},
	],
};
