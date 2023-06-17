document.body.style.overflow = 'hidden';

const InitWG = async () => {
    // WebGPU�̃T�|�[�g�󋵂��`�F�b�N
    if (!navigator.gpu) {
        console.log("WebGPU isn't support your browser");
        return;
    }
    else
    {
        // ���W���[���̐ݒ�
        const canvas = document.getElementById('MainCanvas');
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        Module.canvas = canvas;

        // �f�o�C�X�����O�擾
        const adapter = await navigator.gpu.requestAdapter();
        const device = await adapter.requestDevice();
        Module.preinitializedWebGPUDevice = device;

        // �A�v���P�[�V�����J�n 
        Module.ccall(
            'StartApp',
            'null',
            ['number', 'number'],
            [width, height]
        );
    }
};

addEventListener("load", (event) => {
    InitWG();
});

addEventListener("keydown", (event) => {
    Module.ccall(
        'OnKeyDown',
        'null',
        ['string'],
        [event.key]
    );
});

addEventListener("resize", (event) => {
    const canvas = document.getElementById('MainCanvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    Module.ccall(
        'OnResize',
        'null',
        ['number', 'number'],
        [width, height]
    );
});