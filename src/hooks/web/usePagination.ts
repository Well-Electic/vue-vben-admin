import type { Ref } from 'vue';
import { ref, unref, computed } from 'vue';

function pagination<T = any>(list: T[], pageNo: number, limit: number): T[] {
  const offset = (pageNo - 1) * Number(limit);
  const ret =
    offset + Number(limit) >= list.length
      ? list.slice(offset, list.length)
      : list.slice(offset, offset + Number(limit));
  return ret;
}

export function usePagination<T = any>(list: Ref<T[]>, limit: number) {
  const currentPage = ref(1);
  const pageSizeRef = ref(limit);

  const getPaginationList = computed(() => {
    return pagination(unref(list), unref(currentPage), unref(pageSizeRef));
  });

  const getTotal = computed(() => {
    return unref(list).length;
  });

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  function setPageSize(limit: number) {
    pageSizeRef.value = limit;
  }

  return { setCurrentPage, getTotal, setPageSize, getPaginationList };
}
