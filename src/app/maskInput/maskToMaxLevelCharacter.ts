import type { MaskitoOptions } from '@maskito/core';
import { maskitoUpdateElement } from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoEventHandler,
    maskitoNumberOptionsGenerator,
} from '@maskito/kit';

const { plugins, ...numberOptions } = maskitoNumberOptionsGenerator({
    min: 0,
    max: 80,
    precision: 2,
});

export default {
    ...numberOptions,
    plugins: [
        ...plugins,
        //não deixa o campo ficar vazio
        maskitoEventHandler('blur', element => {
            if (element.value === '') {
                maskitoUpdateElement(element, `0`);
            }
        }),
    ],
} as MaskitoOptions;