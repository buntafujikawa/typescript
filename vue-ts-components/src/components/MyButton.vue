<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MyButton extends Vue {
        private count: number = 0;

        @Prop()
        public greet?: string;

        @Emit()
        public clicked(count: number) {

        }

        public onClick() {
            alert(this.greet);
            this.count++;
            this.clicked(this.count);
        }
    }
</script>
