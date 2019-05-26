import { Wraper, shallowMount } from '@vue/test-utils';
import HelloVue from '@/components/HelloVue.vue';

describe('HelloVue.vue', () => {
    // ラッパー変数の宣言
    let wrapper: Wraper;

    it('propsdeで受け取る値のテスト', () => {
        // 準備
        const val = 'Vue';
        wrapper = shallowMount(HelloVue, {
            propsData: { val },
        });

        // 検証
        expect(wrapper.props().val).toBe(val);
        expect(wrapper.text().toMatch(`Hello VUE`));
    });

    it('描画されるDOMのテスト', () => {
        // 準備
        wrapper = shallowMount(HelloVue);

        // 検証
        expect(wrapper.contains('h1')).toBeTruthy();
        expect(wrapper.contains('input')).toBeTruthy();
        expect(wrapper.contains('button')).toBeTruthy();
    });

    it('ボタンの非活性のテスト', () => {
        // 準備
        wrapper = shallowMount(HelloVue);
        const button = wrapper.find('button');

        // 実行
        wrapper.setData({ inputValue: '' });

        // 検証
        expect(button.element.getAttribute('disabled')).toBeTruthy();
    });
});
