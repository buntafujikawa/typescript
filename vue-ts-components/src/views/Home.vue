<template>
  <div class="home">
    <p>{{greetText}}</p>
    <p>挨拶した回数： {{count}}回</p>
    <p v-if="isRegulars">いつもありがとうございます</p>
    <p>
      <MyButton :greet="greetText" @clicked="onMyButtonClicked">挨拶する</MyButton>
    </p>
    <p>
      <ResetButton initialValue="Hello" v-model="greetText"></ResetButton>
    </p>
    <div>
      <ModalDialogSample/>
    </div>
  </div>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator';
    import MyButton from '@/components/MyButton.vue';
    import ResetButton from '@/components/ResetButton.vue'; // @ is an alias to /src
    import ModalDialogSample from '@/components/ModalDialogSample.vue';

    @Component({
        components: {
            ResetButton,
            MyButton,
            ModalDialogSample
        },
    })

    export default class Home extends Vue {
        public greetText: string = 'Hello';
        private count: number = 0;

        // computed
        public get isRegulars(): boolean {
            return this.count >= 5;
        }

        @Watch('count')
        public countChanged() {
            if (this.count === 5) {
                alert('常連になりました');
            }
        }

        public onMyButtonClicked(count: number) {
            this.count = count;
            this.greetText = 'こんにちは';
        }
    }
</script>
