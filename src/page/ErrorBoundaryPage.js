import { ROUTES } from "../constants";

export default function ErrorBoundaryPage({ message }) {
  return `
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <p class="text-4xl font-bold text-gray-800 mb-4">오류 발생!</p>
        <p class="text-gray-600 mb-8">
          ${message}
        </p>
        <a href="${ROUTES.HOME.path}" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
    `;
}