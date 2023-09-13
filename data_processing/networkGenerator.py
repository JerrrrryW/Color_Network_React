from collections import defaultdict
import csv
import networkx as nx
import json


def load_relative_data(w_min=None, filter_list=None, src='./data_processing/data/network0831.csv', loadPainting=False):
    nodes = []
    links = []
    nxg = nx.Graph()  # 创建一个空的无向图 nxg:NetworkX Graph
    # 读取CSV文件
    with open(src, 'r') as file:
        reader = csv.reader(file)
        next(reader)  # 跳过第一行
        node_degrees = defaultdict(int)  # 存储节点的度数
        for row in reader:
            source, target, weight = row
            edge_width = float(weight) * 3
            grayscale = 100 + 155 * (1 - float(weight))  # 权重最小值为0.58，放大对比度
            if w_min is not None and float(weight) < w_min:  # 过滤掉权重小于w_min的边
                continue
            if filter_list is not None and (
                    source not in filter_list and target not in filter_list):  # Skip nodes and edges that are not in the filter list
                continue  # Skip nodes and edges that are not in the filter list
            if loadPainting and ([0] != 'C' or target[0] != 'C'):  # Skip nodes and edges that are not in the filter list
                continue
            links.append({"source": source.strip(), "target": target.strip(), "value": weight.strip(),
                          "lineStyle": {"width": edge_width,
                                        "color": f"rgba({grayscale}, {grayscale}, {grayscale}, 0.3)"}})
            nxg.add_edge(source.strip(), target.strip(), weight=float(weight))
            node_degrees[source] += 1
            node_degrees[target] += 1

    # 读取节点RGB三个颜色值
    with open('./data_processing/data/color_label.csv', 'r') as file:
        reader = csv.reader(file)
        next(reader)  # 跳过第一行
        node_colors = {}
        # node_theme_nums = {}
        # node_pids = {}
        for row in reader:
            # node, r, g, b, theme_num, pids = row
            node, r, g, b = row
            node_colors[node] = (int(r), int(g), int(b))
            # node_theme_nums[node] = int(theme_num)
            # node_pids[node] = pids

        # 提取所有节点
        for node, degree in node_degrees.items():
            nxg.add_node(node)
            if node[0] == "C":  # 颜色节点
                nodes.append({"name": node,
                              # "value": "{:.2f} | {:.27}...".format(degree, node_pids[node]),
                              "value": "{:.2f}".format(degree),
                              "symbol": "circle",  # node_icons[node_theme_nums[node] - 1],
                              "symbolSize": 10 + degree * 2,
                              "itemStyle": {"color": "rgb{}".format(node_colors[node])}
                              })
            elif loadPainting:  # 画作节点
                nodes.append({"name": node,
                              "value": "{:.2f}".format(degree),
                              "symbol": "rect",  # node_icons[node_theme_nums[node] - 1],
                              "symbolSize": 10 + degree * 2,
                              "itemStyle": {"color": "rgba(140, 70, 40, 0.6)"}
                              })

    return nodes, links, nxg

if __name__ == '__main__':
    nodes, links, nxg = load_relative_data(src='./data_processing/data/demo_vision.csv')
    print(nodes)
    print(links)
    json.dump(nodes, open('./public/data/nodes.json', 'w'))
    json.dump(links, open('./public/data/links.json', 'w'))
    # print(nxg.nodes)
    # print(nxg.edges)