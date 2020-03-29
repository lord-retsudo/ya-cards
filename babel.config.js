const presets = [
  [
    "@babel/env",
    {
      targets: { // 㪠���� 楫�, ��� ����䨫��
            edge: "17",
            ie: "11",
            firefox: "50",
            chrome: "64",
            safari: "11.1",
      },
      useBuiltIns: "usage", // �� ����ன�� babel-polyfill, �᫨ �⮨� ���祭�� usage, � ���� ����⠢����� ����䨫� ��� ���ᨩ ��㧥஢ ����� 㪠���� ����.
      corejs: "3.4.1" // � ���⠢��� ����� corejs
    }
  ],
];

module.exports = { presets };
