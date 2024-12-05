const presentation = {
  background_color: Color.Background,
  slide_counter: false,
  elements: [
    {
      type: Component.Text,
      name: "title",
      value: "Psi Lib",
      font_size: 5,
      color: Color.Red,
      position: [0, -0.2],
      anchor: [0, 0],
      gradient: [Color.Green, Color.Cyan],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "title_description",
      value: "A simple library for creating presentations",
      font_size: 2,
      color: Color.Foreground,
      position: [0, 0.2],
      anchor: [0, 0],
    },
    {
      type: Component.Text,
      name: "how_it_started",
      value: "How it started",
      font_size: 5,
      color: Color.Foreground,
      position: [0, 0],
      anchor: [0, 0],
    },
    {
      type: Component.Image,
      name: "google_slides",
      path: "./GoogleSlides.png",
      position: [0, 0],
      anchor: [0, 0],
      size: [(((0.5 * 374) / 512) * 9) / 16, 0.5],
    },
    {
      type: Component.Image,
      name: "denied",
      path: "./denied.png",
      position: [0, 0],
      anchor: [0, 0],
      size: [(0.6 * 9) / 16, 0.6],
    },
    {
      type: Component.Image,
      name: "html",
      path: "./js.png",
      position: [0, 0],
      anchor: [0, 0],
      size: [(0.5 * 9) / 16, 0.5],
    },
    {
      type: Component.Text,
      name: "how_it_works",
      value: "How it Works",
      font_size: 5,
      color: Color.Foreground,
      position: [0, 0],
      anchor: [0, 0],
    },
    {
      type: Component.Rectangle,
      name: "code_background",
      color: Color.CurrentLine,
      position: [0.2, 0.1],
      anchor: [0, 0],
      size: [0.6, 0.7],
      border_radius: 0.02,
    },
    {
      type: Component.Text,
      name: "function",
      value: "function createPhysicalComponent(elem)",
      font_size: 1,
      color: Color.Foreground,
      position: [0.4, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Purple, Color.Pink],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "createComponent1",
      value:
        'let phys = document.createElement(elem.type == Component.Image ? "img" : "div");\n\n' +
        "\tconst [x, y] = [\n" +
        "\t\t(document.body.clientWidth * (elem.position[0] + 1)) / 2,\n" +
        "\t\t(document.body.clientHeight * (elem.position[1] + 1)) / 2,\n" +
        "\t];\n" +
        "\tconst [anchorX, anchorY] = [\n" +
        "\t\t(elem.anchor[0] + 1) / 2,\n" +
        "\t\t(elem.anchor[1] + 1) / 2,\n" +
        "\t];\n" +
        '\tphys.style.position = "absolute";\n' +
        "\tphys.style.left = `${x}px`;\n" +
        "\tphys.style.top = `${y}px`;\n" +
        "\tphys.style.transform = `translate(${-anchorX * 100}%, ${-anchorY * 100}%)`;\n" +
        "\tphys.style.opacity = elem.opacity ?? 0;\n\n" +
        "\tphys.style.border = `${(elem.border_size ?? 0) *\n" +
        "\tdocument.body.clientHeight}px solid ${elem.border_color ?? Color.None}`;",
      font_size: 0.8,
      color: Color.Foreground,
      position: [0.2, 0.1],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "createComponent2",
      value:
        "case Component.Text:\n" +
        "\tif (elem.max_width !== undefined) phys.style.maxWidth = \n\t\t`${elem.max_width * document.body.clientWidth}px`;\n" +
        "\tif (elem.max_height !== undefined) phys.style.maxHeight = \n\t\t`${elem.max_height * document.body.clientHeight}px`;\n\n" +
        '\tphys.style.fontFamily =  elem.font ?? "sans-serif";\n' +
        "\tphys.style.fontSize = `${elem.font_size * 24 * document.body.clientHeight / 720}px`;\n" +
        '\tphys.style.textAlign = elem.text_align ?? "center";\n' +
        '\tphys.style.whiteSpace = "pre";\n' +
        "\tphys.innerHTML = elem.value;\n" +
        "\tphys.style.color = elem.color;\n" +
        "\tphys.style.zIndex = elem.layer ?? 0;\n" +
        "\tif (elem.gradient !== undefined) {\n" +
        "\t\tphys.style.background = `linear-gradient(${elem.gradient_direction}, \n\t\t${elem.gradient[0]}, ${elem.gradient[1]})`;\n" +
        '\t\tphys.style.backgroundClip = "text";\n' +
        '\t\tphys.style.webkitTextFillColor = "transparent";\n' +
        "\t}",
      font_size: 0.8,
      color: Color.Foreground,
      position: [0.2, 0.1],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "function_switch",
      value: "switch (elem.type)",
      font_size: 1,
      color: Color.Foreground,
      position: [0.3, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Red, Color.Orange],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "createComponent3",
      value:
        "case Component.Rectangle:\n" +
        "\t\tphys.style.backgroundColor = elem.color;\n" +
        "\t\tphys.style.width = `${elem.size[0] * document.body.clientWidth}px`;\n" +
        "\t\tphys.style.height = `${elem.size[1] * document.body.clientHeight}px`;\n" +
        "\t\tphys.style.borderRadius = \n\t\t`${elem.border_radius * document.body.clientHeight}px`;\n" +
        "\t\tphys.style.zIndex = elem.layer ?? 0;\n" +
        "\t\tif (elem.gradient !== undefined) {\n" +
        "\t\t\t//Posibly add case to check if backround color is set\n" +
        "\t\t\tphys.style.background = `linear-gradient(${elem.gradient_direction}, \n\t${elem.gradient[0]}, ${elem.gradient[1]})`;\n" +
        "\t\t}",
      font_size: 0.8,
      color: Color.Foreground,
      position: [0.2, -0.1],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "createComponent4",
      value:
        "case Component.Image:\n" +
        "\t\tphys.src = elem.path;\n" +
        "\t\tphys.style.width = `${elem.size[0] * document.body.clientWidth}px`;\n" +
        "\t\tphys.style.height = `${elem.size[1] * document.body.clientHeight}px`;\n" +
        "\t\tphys.style.borderRadius = \n\t\t`${elem.border_radius * document.body.clientHeight}px`;\n" +
        "\t\tphys.style.zIndex = elem.layer ?? 0;\n" +
        "\t\tphys.draggable = false;",
      font_size: 0.8,
      color: Color.Foreground,
      position: [0.2, -0.3],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "function2",
      value: "function addKeyframe(index)",
      font_size: 1,
      color: Color.Foreground,
      position: [0.4, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Foreground, Color.Green],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "addKeyframe",
      value:
        "\tfor (const anim of current_slide.keyframes[index]) {\n" +
        "\t\tkeyframe_queue.push({\n" +
        "\t\t\t...anim,\n" +
        "\t\t\telement: anim.name !== undefined ? getNameId(anim.name) : anim.element,\n" +
        "\t\t\tstart_time: performance.now() + (anim.delay ?? 0) * 1000, // milliseconds\n" +
        "\t\t\tduration: anim.duration ?? 1.0, // seconds\n" +
        "\t\t\tcurve:\n" +
        "\t\t\t\tanim.time_curve ??\n" +
        "\t\t\t\tfunction (t) {\n" +
        "\t\t\t\t\tif (t < 0.5) {\n" +
        "\t\t\t\t\t\treturn 2 * t * t;\n" +
        "\t\t\t\t\t} else {\n" +
        "\t\t\t\t\t\treturn 1 - 2 * (1 - t) * (1 - t);\n" +
        "\t\t\t\t}\n" +
        "\t\t\t},\n" +
        "\t\t});\n" +
        "\t}\n" +
        "\tkeyframe_counter++;\n" +
        "}",
      font_size: 0.75,
      color: Color.Foreground,
      position: [0.2, 0.0],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "function3",
      value: "function getAnimatedSlide(slide)",
      font_size: 1,
      color: Color.Foreground,
      position: [0.4, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Orange, Color.Cyan],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "getAnimatedSlide",
      value:
        "let deep = JSON.parse(JSON.stringify(slide));\n" +
        "for (let i = 0; i < keyframe_queue.length; i++) {\n" +
        "\tconst anim = keyframe_queue[i];\n" +
        "\tlet t = (performance.now() - anim.start_time) / (anim.duration * 1000);\n" +
        "\tif (t < 0) continue;\n" +
        "\tlet finished = t >= 1.0;\n" +
        "\tif (finished) {\n" +
        "\t\tt = 1.0;\n" +
        "\t\tfinished = true;\n" +
        "\t}\n\n" +
        "\tlet curved_t = anim.curve(t);\n" +
        "\tlet deep_element = deep.elements[anim.element];",
      font_size: 0.75,
      color: Color.Foreground,
      position: [0.2, -0.2],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "function3_switch",
      value: "switch (anim.type)",
      font_size: 1,
      color: Color.Foreground,
      position: [0.35, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Comment, Color.Pink],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "move",
      value:
        "case Action.Move:\n" +
        '\t\tif ("destination" in anim) {\n' +
        "\t\t\tdeep_element.position = [\n" +
        "\t\t\t\tdeep_element.position[0] * (1 - curved_t) + \n\t\t\t\tanim.destination[0] * curved_t,\n" +
        "\t\t\t\tdeep_element.position[1] * (1 - curved_t) + \n\t\t\t\tanim.destination[1] * curved_t,\n" +
        "\t\t\t];\n" +
        "\t\t}\n" +
        '\t\tif ("anchor" in anim) {\n' +
        "\t\t\tdeep_element.anchor = [\n" +
        "\t\t\t\tdeep_element.anchor[0] * (1 - curved_t) + \n\t\t\t\tanim.anchor[0] * curved_t,\n" +
        "\t\t\t\tdeep_element.anchor[1] * (1 - curved_t) + \n\t\t\t\tanim.anchor[1] * curved_t,\n" +
        "\t\t\t];\n" +
        "\t\t}",
      font_size: 0.75,
      color: Color.Foreground,
      position: [0.2, -0.05],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "function4",
      value: "function draw()",
      font_size: 1,
      color: Color.Foreground,
      position: [0.35, -0.7],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
      gradient: [Color.Purple, Color.Cyan],
      gradient_direction: "to right",
    },
    {
      type: Component.Text,
      name: "draw",
      value:
        "if (keyframe_queue.length > 0 || force_draw) {\n" +
        "\tforce_draw = false;\n" +
        "\tconst display_slide = getAnimatedSlide(current_slide);\n" +
        "\tdocument.body.innerHTML = '&lt;div class=\"counter\"&gt;&lt;/div&gt;';\n" +
        "\tdocument.body.style.backgroundColor = display_slide.background_color ?? Color.Background;\n" +
        '\tdocument.documentElement.style.backgroundColor = "#000000";\n' +
        "\t// for (let i = 0; i < display_slide.elements.length; i++) {\n" +
        "\t//     const elem = display_slide.elements[i];\n" +
        "\tfor (const elem of display_slide.elements) {\n" +
        "\t\tif (elem.opacity <= 0 || elem.opacity === undefined) continue;\n" +
        "\t\tconst html_element = createPhysicalComponent(elem);\n" +
        "\t\tdocument.body.appendChild(html_element);\n" +
        "\t}\n" +
        "}\n\n" +
        "window.requestAnimationFrame(draw);",
      font_size: 0.75,
      color: Color.Foreground,
      position: [0.2, -0.05],
      anchor: [0, 0],
      font: "JetBrains Mono",
      text_align: "left",
    },
    {
      type: Component.Text,
      name: "conclusion",
      value: "Conclusion",
      font_size: 5,
      color: Color.Foreground,
      position: [0, 0],
      anchor: [0, 0],
      gradient: [Color.Green, Color.Cyan],
      gradient_direction: "to right",
    },
  ],
  keyframes: [
    [],
    [
      { name: "title", type: Action.FadeIn, delay: 0 },
      { name: "title_description", type: Action.FadeIn, delay: 0.2 },
    ],
    [
      { name: "title", type: Action.FadeOut, delay: 0 },
      { name: "title_description", type: Action.FadeOut, delay: 0 },
      { name: "how_it_started", type: Action.FadeIn, delay: 0.3 },
    ],
    [
      { name: "how_it_started", type: Action.Resize, font_size: 3, duration: 0.3 },
      { name: "how_it_started", type: Action.Move, destination: [-0.6, -0.8], duration: 0.3 },
    ],
    [{ name: "google_slides", type: Action.FadeIn, delay: 0 }],
    [{ name: "denied", type: Action.FadeIn, delay: 0 }],
    [
      { name: "google_slides", type: Action.FadeOut, delay: 0 },
      { name: "denied", type: Action.FadeOut, delay: 0 },
      { name: "html", type: Action.FadeIn, delay: 0.3 },
    ],
    [
      { name: "html", type: Action.FadeOut, delay: 0 },
      { name: "how_it_started", type: Action.FadeOut, delay: 0 },
      { name: "how_it_works", type: Action.FadeIn, delay: 0.3 },
    ],
    [
      { name: "how_it_works", type: Action.Resize, font_size: 3, duration: 0.3 },
      { name: "how_it_works", type: Action.Move, destination: [-0.6, -0.8], duration: 0.3 },
    ],
    [
      { name: "code_background", type: Action.FadeIn, delay: 0 },
      { name: "function", type: Action.FadeIn, delay: 0 },
    ],
    [{ name: "createComponent1", type: Action.FadeIn, delay: 0 }],
    [
      { name: "createComponent1", type: Action.FadeOut, delay: 0 },
      { name: "function", type: Action.Move, duration: 0.1, destination: [0.4, -0.8] },
      { name: "function_switch", type: Action.FadeIn, delay: 0.15 },
      { name: "function_switch", type: Action.SlideIn, direction: Cardinal.South, duration: 0.2, delay: 0.17 },
      { name: "createComponent2", type: Action.FadeIn, delay: 0.2 },
    ],
    [
      { name: "createComponent2", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "code_background", type: Action.Move, destination: [0.2, -0.1], duration: 0.2, delay: 0.2 },
      { name: "code_background", type: Action.Resize, size: [0.6, 0.5], duration: 0.2, delay: 0.25 },
      { name: "createComponent3", type: Action.FadeIn, delay: 0.15 },
    ],
    [
      { name: "createComponent3", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "code_background", type: Action.Move, destination: [0.2, -0.3], duration: 0.2, delay: 0.2 },
      { name: "code_background", type: Action.Resize, size: [0.6, 0.3], duration: 0.2, delay: 0.25 },
      { name: "createComponent4", type: Action.FadeIn, delay: 0.15 },
    ],
    [
      { name: "createComponent4", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "code_background", type: Action.Move, destination: [0.2, 0], duration: 0.4, delay: 0.2 },
      { name: "code_background", type: Action.Resize, size: [0.6, 0.6], duration: 0.4, delay: 0.25 },
      { name: "function_switch", type: Action.FadeOut, duration: 0.4, delay: 0.3 },
      { name: "function", type: Action.FadeOut, duration: 0.5, delay: 0.35 },
      { name: "function2", type: Action.FadeIn, duration: 0.5, delay: 0.4 },
      { name: "function2", type: Action.Move, destination: [0.4, -0.7], duration: 0.6, delay: 0.5 },
    ],
    [{ name: "addKeyframe", type: Action.FadeIn, delay: 0 }],
    [
      { name: "addKeyframe", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "function2", type: Action.FadeOut, delay: 0 },
      { name: "function3", type: Action.FadeIn, duration: 0.5, delay: 0.3 },
      { name: "code_background", type: Action.Resize, size: [0.5, 0.4], duration: 0.4, delay: 0.35 },
      { name: "code_background", type: Action.Move, destination: [0.2, -0.2], duration: 0.4, delay: 0.3 },
    ],
    [{ name: "getAnimatedSlide", type: Action.FadeIn, delay: 0 }],
    [
      { name: "getAnimatedSlide", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "function3", type: Action.Move, destination: [0.4, -0.8], duration: 0.5, delay: 0 },
      { name: "function3_switch", type: Action.FadeIn, duration: 0.5, delay: 0.3 },
      { name: "code_background", type: Action.Resize, size: [0.5, 0.55], duration: 0.4, delay: 0.2 },
      { name: "code_background", type: Action.Move, destination: [0.2, -0.05], duration: 0.4, delay: 0.2 },
    ],
    [{ name: "move", type: Action.FadeIn, duration: 0.4, delay: 0 }],
    [
      { name: "move", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "code_background", type: Action.Resize, size: [0.7, 0.6], duration: 0.4, delay: 0 },
      { name: "code_background", type: Action.Move, destination: [0.2, 0], duration: 0.4, delay: 0 },
      { name: "function3_switch", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "function3", type: Action.FadeOut, duration: 0.5, delay: 0 },
      { name: "function4", type: Action.FadeIn, duration: 0.5, delay: 0.3 },
    ],
    [{ name: "draw", type: Action.FadeIn, delay: 0 }],
    [
      { name: "draw", type: Action.FadeOut, duration: 0.4, delay: 0 },
      { name: "function4", type: Action.FadeOut, delay: 0 },
      { name: "how_it_works", type: Action.FadeOut, delay: 0 },
      { name: "code_background", type: Action.FadeOut, delay: 0 },
      { name: "conclusion", type: Action.FadeIn, delay: 0.3 },
    ],
  ],
};
