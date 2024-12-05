const Component = Object.freeze({
    Text: 0,
    Image: 1,
    Rectangle: 2,
    Arrow: 3,
    Code: 4,
});

const Action = Object.freeze({
    Show: 0,
    Hide: 1,
    FadeIn: 2,
    FadeOut: 3,
    SlideIn: 4,
    SlideOut: 5,
    Move: 6,
    Resize: 7,
});

const Color = Object.freeze({
    None: "#00000000",
    Background: "#282A36",
    CurrentLine: "#44475A",
    Foreground: "#F8F8F2",
    Comment: "#6272A4",
    Cyan: "#8BE9FD",
    Green: "#50FA7B",
    Orange: "#FFB86C",
    Pink: "#FF79C6",
    Purple: "#BD93F9",
    Red: "#FF5555",
    Yellow: "#F1FA8C",
});

const Cardinal = Object.freeze({
    North: 0,
    South: 1,
    West: 2,
    East: 3,
});