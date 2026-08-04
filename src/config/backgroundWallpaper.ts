import type { BackgroundWallpaperConfig } from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
	mode: "none",
	playerEnable: false,
	src: "",
	common: {
		homeText: {
			enable: false,
			title: "Ruo",
			subtitle: "随笔 · 播客 · Vlog",
		},
		waves: { enable: false },
		gradient: { enable: false },
		carousel: { enable: false },
	},
};
