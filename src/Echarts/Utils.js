function readCSVFile(filePath) {
    const fs = require('fs');
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const rows = fileData.split('\n');
        const data = [];
        for (const row of rows) {
            const columns = row.split(',');
            data.push(columns);
        }
        return data;
    } catch (error) {
        console.error('Error reading CSV file:', error);
        return [];
    }
  }

function loadNodeColors(path, filterList) {
    const nodeColors = {};

    if (path === undefined) {
        path = 'res/color_label.csv';
    }

    // 假设你已经有了一个用于读取CSV的函数，例如readCSVFile
    const csvData = readCSVFile(path);

    for (const row of csvData) {
        const node = row[0];
        const r = parseInt(row[1]);
        const g = parseInt(row[2]);
        const b = parseInt(row[3]);

        if (filterList !== null && !filterList.includes(node)) {
            continue;
        }

        nodeColors[node] = [r, g, b];
    }

    return nodeColors;
}
