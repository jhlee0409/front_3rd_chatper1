import { AUTH_PATH_IDS, PUBLIC_PATH_IDS, TAB_LIST } from "../constants";

function TabList(type) {
  const filteredPathIds = type === "auth" ? AUTH_PATH_IDS : PUBLIC_PATH_IDS;
  const currentPath = window.location.pathname;
  const tabListHtml = TAB_LIST.filter((tab) => filteredPathIds.includes(tab.id))
    .map(
      (tab) =>
        `<li><a href="${tab.path}" id="${tab.id}" class="${
          tab.path === currentPath ? "text-blue-600 font-bold" : "text-gray-600"
        }">${tab.name}</a></li>`
    )
    .join("");

  return `
        <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul id='tab-list' class="flex justify-around">
            ${tabListHtml}  
          </ul>
        </nav>
        `;
}

export default function Header(type) {
  return `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      ${TabList(type)}
  `;
}
