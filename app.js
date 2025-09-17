const productData = `製品名,製品品番,4桁の番号（※3）
ｱﾌﾟﾚｼｱ ﾌﾟﾗｽ ｼｭｶﾞｰﾋﾟﾝｸ 0.8L,BF805774,5221
ｱﾌﾟﾚｼｱ ﾌﾟﾗｽ ｶﾌｪｵﾚ 0.8L,BF805170,4221～2522
ｱﾌﾟﾚｼｱ ｳﾙﾄﾗｸﾘｰﾝ ﾈｵ ﾊﾟｰﾙﾎﾜｲﾄ 0.8L,KO3901JP,4421～1324
ｱﾌﾟﾚｼｱ ｴｰｼﾞｰ･ﾌﾟﾗｽ ﾛｯｸ ﾊﾟｰﾙﾎﾜｲﾄ 0.8L,KO4301JP,4221～2424
ｳｫｯｼｬﾌﾞﾙ 0.8L,KO8001JP,4321～5123
ｱﾌﾟﾚｼｱ･ﾌﾟﾗｽ ｶﾌｪｵﾚ  0.8L,KO630AJP,4421～4023
ｱﾌﾟﾚｼｱ･ﾌﾟﾗｽ ﾎﾜｲﾄ  0.8L,KO6301JP,4221～3923
ｱﾌﾟﾚｼｱ･ﾌﾟﾗｽ ｼｭｶﾞｰﾋﾟﾝｸ  0.8L,KO6307JP,4321～4823
ｱﾌﾟﾚｼｱ･ﾌﾟﾗｽ ﾛｯｸ ﾎﾜｲﾄ 0.8L,KO5401JP /87A,2822～4323
,KO5401JP /87B,424
ｱﾌﾟﾚｼｱ ｳﾙﾄﾗｸﾘｰﾝ ﾈｵ ｵﾆｷｽﾌﾞﾗｯｸ 0.8L,KO3908JP,1922～2424
ｱﾌﾟﾚｼｱ ｴｰｼﾞｰ･ﾌﾟﾗｽ ﾛｯｸ ｵﾆｷｽﾌﾞﾗｯｸ 0.8L,KO4308JP,4523～3024
ｱﾌﾟﾚｼｱ ｳﾙﾄﾗｸﾘｰﾝ ﾈｵ ﾙﾋﾞｰﾚｯﾄﾞ 0.8L,KO3905JP,0523～2324
ｱﾌﾟﾚｼｱ･ﾌﾟﾗｽ ﾛｯｸ ﾌﾞﾗｯｸ 0.8L,KO5408JP /87A,3022～1924
ｱﾌﾟﾚｼｱ ｴｰｼﾞｰ･ﾌﾟﾗｽ ｺﾝﾄﾛｰﾙ ﾊﾟｰﾙﾎﾜｲﾄ 0.8L,KO6201JP,4121～0922
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｺﾝﾄﾛｰﾙ ﾎﾜｲﾄ 1.2L,KO7551JP,4121～5123
ｱﾌﾟﾚｼｱ ｺﾝﾄﾛｰﾙ ﾎﾜｲﾄ 0.8L,KO7201JP,4121～2424
ｱﾌﾟﾚｼｱ ﾛｯｸ ｺﾝﾄﾛｰﾙ ﾎﾜｲﾄ 0.8L,KO8401JP,2522～1524
ｼﾞｬｽﾃｨﾝ ﾛｯｸ ｺﾝﾄﾛｰﾙ ｱｲﾎﾞﾘｰ 1.2L,KO823AJP,3023～1924
ｱﾌﾟﾚｼｱ ｴｰｼﾞｰ･ﾌﾟﾗｽ ｺﾝﾄﾛｰﾙ ｵﾆｷｽﾌﾞﾗｯｸ 0.8L,KO6208JP,4021～2422
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｺﾝﾄﾛｰﾙ ﾌﾞﾗｯｸ 1.2L,KO7558JP,4221～0124
ｱﾌﾟﾚｼｱ ｺﾝﾄﾛｰﾙ ﾌﾞﾗｯｸ 0.8L,KO7208JP,4121～1724
ｶﾌｪ ｺﾝﾄﾛｰﾙ 1.0L,KO9238JP,0422～1324
ﾃｲｴｰﾙ 1.5L,BJ813DJP,4121～0224
ｱﾌﾟﾚｼｱ ﾛｯｸ ｺﾝﾄﾛｰﾙ ｴｺ ﾌﾞﾗｯｸ 0.8L,KO8418JP,0123～1024
ｼﾞｬｽﾃｨﾝ ﾛｯｸ ｺﾝﾄﾛｰﾙ ﾌﾞﾗｯｸ 1.2L,KO823NJP,3123～0424
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｶｶｵﾌﾞﾗｯｸ 1.2L,KO3408JP,4121～0224
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾌﾞﾗｯｸ 1.0L,KO4418JP,4221～4922
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾌﾞﾗｯｸ 1.0L,KO4428JP,2622～1124
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾌﾞﾗｯｸ 1.0L,KO441NJP,3823～0824
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾚｯﾄﾞ 1.0L,KO4415JP,4321～2224
ﾏﾁﾈ ｱｲﾎﾞﾘｰ 1.0L,KO323AJP,5021～0924
ﾏﾁﾈ ﾋﾟｽﾀﾁｵ 1.0L,KO3233JP,4921～1424
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾌﾞﾗｯｸ 1.2L,KO4908JP,4121～4523
ﾃﾞﾙﾌｨﾆｱｯﾌﾟ ﾌﾞﾗｯｸ 1.8L,KO1738JP,4321～2823
ｴｸｽﾄﾗ ﾌﾞﾗｯｸ 1.0L,KO1718JP,5121～4623
ﾃﾞｨｽﾌﾟﾚｲ ｺﾝﾄﾛｰﾙ 1.0L,KO8548JP,0122～5323
ｾｰﾌ･ﾄｩ･ﾀｯﾁ ﾌﾞﾗｯｸ 1.0L,KO2618JP,1222～2024
ﾊﾟﾌｫｰﾏ ﾌﾞﾗｯｸ 1.5L,KO1548JP,4321～1024
ﾊﾟﾌｫｰﾏ ﾌﾞﾗｯｸ 0.8L,KO1538JP,4421～0124
ﾊﾟﾌｫｰﾏ ﾚｯﾄﾞ 0.8L,KO1535JP,5221～2224
ﾒｿﾞﾝ ﾜｲﾝﾚｯﾄﾞ 1.0L,KI271FJP,4121～1224
ﾒｿﾞﾝ ｽﾉｰﾎﾜｲﾄ 1.0L,KI2711JP,4421～1524
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾎﾜｲﾄ 1.2L,KO340175,4221～5223
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｼｭｶﾞｰﾋﾟﾝｸ 1.2L,KO340178,4921
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｽｶｲﾌﾞﾙｰ 1.2L,KO340176,4121～1022
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾎﾜｲﾄ 1.0L,KO4411JP,4121～4323
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾎﾜｲﾄ 1.2L,KO4901JP,4321～4223
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｻｰﾌﾞﾙ 1.2L,KO490AJP,4421～4923
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｽｶｲﾌﾞﾙｰ 1.2L,KO4904JP,4221～4123
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｼｭｶﾞｰﾋﾟﾝｸ 1.2L,KO4907JP,4221～0224
ｴｸｽﾄﾗ ﾎﾜｲﾄ 1.0L,KO1711JP,4221～4023
ﾃﾞﾙﾌｨﾆｱｯﾌﾟ ﾎﾜｲﾄ 1.8L,KO1731JP,4121～2523
ﾃﾞﾙﾌｨﾆ ｳﾞｨｼﾞｮﾝ ｱｲﾎﾞﾘｰ 1.8L,KO173AJP,4621～5123
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ﾛｯｸ ﾎﾜｲﾄ 1.0L,KO4421JP,2522～4023
ｾｰﾌ･ﾄｩ･ﾀｯﾁ ﾎﾜｲﾄ 1.0L,KO2611JP,4521～0324
ﾊﾟﾌｫｰﾏ ﾎﾜｲﾄ 1.5L,KO1541JP,1522～0124
ﾊﾟﾌｫｰﾏ ﾎﾜｲﾄ 0.8L,KO1531JP,0322～5123
ｼﾞｬｽﾃｨﾝ ﾌﾟﾗｽ ｻｰﾌﾞﾙ 1.2L,KO340177,5121
ｶﾌｪ ﾛｯｸ ｺﾝﾄﾛｰﾙ 1.0L,KO9268JP,4823～0224
ﾊﾟﾚ 1L ﾎﾜｲﾄ,KO2521JP,4321～5021`;

let products = [];

function parseCSV() {
    const lines = productData.split('\n');
    products = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
            const parts = line.split(',');
            if (parts.length >= 3) {
                const productName = parts[0].trim();
                const productNumber = parts[1].trim();
                const manufacturePeriod = parts[2].trim();

                products.push({
                    name: productName,
                    number: productNumber,
                    period: manufacturePeriod
                });
            }
        }
    }
}

function parseWeekYear(weekYear) {
    if (weekYear.length !== 4) return null;

    const week = parseInt(weekYear.substring(0, 2));
    const year = parseInt(weekYear.substring(2, 4));

    if (week < 1 || week > 53 || year < 0 || year > 99) return null;

    return { week, year };
}

function compareWeekYear(wq1, wq2) {
    if (wq1.year !== wq2.year) {
        return wq1.year - wq2.year;
    }
    return wq1.week - wq2.week;
}

function isInRange(inputWeekYear, startWeekYear, endWeekYear) {
    const input = parseWeekYear(inputWeekYear);
    const start = parseWeekYear(startWeekYear);
    const end = parseWeekYear(endWeekYear);

    if (!input || !start || !end) return false;

    return compareWeekYear(input, start) >= 0 && compareWeekYear(input, end) <= 0;
}

function checkProduct() {
    const productNumberInput = document.getElementById('productNumber').value.trim();
    const manufactureCodeInput = document.getElementById('manufactureCode').value.trim();
    const resultDiv = document.getElementById('result');

    if (!productNumberInput || !manufactureCodeInput) {
        resultDiv.innerHTML = '<div class="result no-match">製品品番と4桁の番号を両方入力してください。</div>';
        return;
    }

    if (manufactureCodeInput.length !== 4 || !/^\d{4}$/.test(manufactureCodeInput)) {
        resultDiv.innerHTML = '<div class="result no-match">4桁の番号は数字4桁で入力してください。</div>';
        return;
    }

    parseCSV();

    for (const product of products) {
        if (product.number === productNumberInput) {
            const period = product.period;

            if (period.includes('～')) {
                const [start, end] = period.split('～');
                if (isInRange(manufactureCodeInput, start, end)) {
                    resultDiv.innerHTML = `
                        <div class="result match">
                            <div>✓ 対象製品です</div>
                            <div class="product-name">${product.name}</div>
                        </div>
                    `;
                    return;
                }
            } else {
                if (period === manufactureCodeInput) {
                    resultDiv.innerHTML = `
                        <div class="result match">
                            <div>✓ 対象製品です</div>
                            <div class="product-name">${product.name}</div>
                        </div>
                    `;
                    return;
                }
            }
        }
    }

    resultDiv.innerHTML = '<div class="result no-match">対象製品ではありません。</div>';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('productNumber').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkProduct();
        }
    });

    document.getElementById('manufactureCode').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkProduct();
        }
    });

    document.getElementById('manufactureCode').addEventListener('input', function(e) {
        this.value = this.value.replace(/\D/g, '');
    });
});