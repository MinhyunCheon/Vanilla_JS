const quotes = [
    {
        quote: "모두가 함께 앞으로 나아가면 성공은 저절로 따라옵니다."
        , author: "미국 기업가이자 Ford Motor Company 창립자 Henry Ford"
    }
    , {
        quote: "우리 모두 스스로가 원하는 리더가 됩시다."
        , author: "작가이자 동기 부여 연설가 Simon Sinek"
    }
    , {
        quote: "사려 깊고 헌신하는 작은 시민 집단이 세상을 바꿀 수 있다는 것을 믿어 의심치 않습니다. 시민이야말로 지금까지 세상을 바꿔온 유일한 존재입니다."
        , author: "미국 문화 인류학자 Margaret Mead"
    }
    , {
        quote: "혼자서는 작은 한 방울이지만 함께 모이면 바다를 이룹니다."
        , author: "일본 작가 Ryunosuke Satoro"
    }
    , {
        quote: "팀워크의 좋은 점은 언제나 나를 지지해 주는 누군가가 있다는 것입니다."
        , author: "미국 작가이자 MLA 전무 이사 Margaret Carty"
    }
    , {
        quote: "뛰어난 팀은 서로 감추지 않습니다. 치부를 드러내길 꺼리지 않습니다. 비난을 두려워하지 않고 자신의 실수, 약점, 걱정을 인정합니다."
        , author: "미국 작가 Patrick Lencioni"
    }
    , {
        quote: "한 사람이 팀에 지대한 역할을 할 수 있지만, 한 사람으로 팀을 만들 수는 없습니다."
        , author: "전 미국 농구 선수 Kareem Abdul-Jabbar"
    }
    , {
        quote: "개개인이 힘을 합쳐 팀으로써 함께 이뤄내는 것은 팀, 회사, 사회를 제대로 작동하게 하는 원동력입니다."
        , author: "미식축구 코치이자 NFL 이사 Vince Lombardi"
    }
    , {
        quote: "우리의 사랑은 매우 커서 모두를 포용할 수 있습니다."
        , author: "Open Philanthropy Project 및 Good Ventures 사장 Cari Tuna"
    }
    , {
        quote: "훌륭한 팀은 팀워크 문화를 조성하여 성공을 위한 초석을 다집니다."
        , author: "미식축구 선수 Ted Sundquist"
    }
    , {
        quote: "무언가가 몹시 중요하다면 성공할 가능성이 희박하더라도 시도하세요."
        , author: "SpaceX 창립자이자 CEO 및 Tesla, Inc. CEO Elon Musk"
    }
    , {
        quote: "가장 큰 위험은 위험을 무릅쓰지 않는 것입니다. 급변하는 세상에서 실패할 수밖에 없는 전략은 위험을 감수하지 않는 것입니다."
        , author: "인터넷 사업가이자 Facebook 공동 창업자 Mark Zuckerberg"
    }
    , {
        quote: "피해갈 수 있는 유일한 길은 뚫고 가는 것입니다."
        , author: "미국 시인 Robert Frost"
    }
    , {
        quote: "얼마나 많은 목표를 이루어냈든 가장 높은 곳을 바라봐야 합니다."
        , author: "미국 TV 뉴스 앵커 Jessica Savitch"
    }
]

const quote = document.querySelector("div#quote span:first-child");
const author = document.querySelector("div#quote span:last-child");

// round(반올림), ceil(올림), floor(내림)
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
