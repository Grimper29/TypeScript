/// <reference path="fourslash.ts" />

////const x = () => 0;

verify.navigationTree({
    "text": "<global>",
    "kind": "script",
    "childItems": [
        {
            "text": "x",
            "kind": "function",
            "spans": [
                { start: 10, length: 7, },
            ],
        },
    ]
}, /*checkSpans*/ true);

//verify.navigationBar();
