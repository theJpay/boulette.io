import { computed, ref } from "vue";

type WriteTextOptions = {
    delay?: number;
    typingSpeed?: number;
};

export function useTypeText(
    movingText: string = "",
    { delay = 1000, typingSpeed = 300 }: WriteTextOptions = {}
) {
    const text = ref("");
    const isTyping = ref(false);
    const charIndex = ref(0);

    const isDoneWriting = computed(() => charIndex.value === movingText.length);

    const typeText = () => {
        if (charIndex.value === movingText.length) return;

        isTyping.value = true;
        text.value += movingText.charAt(charIndex.value);
        charIndex.value++;
        isTyping.value = false;
        setTimeout(typeText, typingSpeed);
    };

    setTimeout(typeText, delay);

    return {
        isDoneWriting,
        isTyping,
        startWriting: typeText,
        text,
    };
}
