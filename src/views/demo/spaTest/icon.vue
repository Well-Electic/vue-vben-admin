<template>
  <PageWrapper title="Icon组件示例">
    <CollapseContainer title="IconIfy 组件使用" class="my-5">
      <div class="flex justify-around flex-wrap">
        <Icon icon="ion:layers-outline" :size="30" />
        <Icon icon="ion:bar-chart-outline" :size="30" />
        <Icon icon="ion:tv-outline" :size="30" />
        <Icon icon="ion:settings-outline" :size="30" />
      </div>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { CollapseContainer } from '/@/components/Container/index';
  import { Icon } from '/@/components/Icon/index';
  import { PageWrapper } from '/@/components/Page';
</script>
