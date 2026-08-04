import type { MusicPlayerConfig } from "../types/musicConfig";

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: false,
	showInSidebar: false,
	mode: "local",
	volume: 0.7,
	playMode: "list",
	showLyrics: false,
	local: { playlist: [] },
};
