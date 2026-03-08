import Parser from "rss-parser";

async function run() {
    const parser = new Parser();
    const feed = await parser.parseURL("https://medium.com/feed/@yakshbhesaniya");
    
    console.log(`Total posts fetched: ${feed.items.length}`);
    feed.items.forEach((item, index) => {
        console.log(`${index + 1}. Link: ${item.link}`);
    });
}

run();
