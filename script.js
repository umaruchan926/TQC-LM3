const additionalQuestions = [ ]; 
const questionDatabase = [
    {
        "id": "1-01",
        "question": "在 OSI 模型中，下列哪一層負責檢查傳送的資料是否正確？",
        "options": [
            {
                "label": "傳輸層（Transport Layer）",
                "value": "A"
            },
            {
                "label": "網路層（Network Layer）",
                "value": "B"
            },
            {
                "label": "資料鏈結層（Data Link Layer）",
                "value": "C"
            },
            {
                "label": "實體層（Physical Layer）",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-02",
        "question": "在 OSI 模型中，下列哪一層負責建立及拆解封包？",
        "options": [
            {
                "label": "應用層（Application Layer）",
                "value": "A"
            },
            {
                "label": "展示層（Presentation Layer）",
                "value": "B"
            },
            {
                "label": "傳輸層（Transport Layer）",
                "value": "C"
            },
            {
                "label": "網路層（Network Layer）",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-03",
        "question": "下列哪一種網路實體拓樸（Physical Topology）會需要用到終端電阻來吸收回音現象？",
        "options": [
            {
                "label": "環狀拓樸（Ring Topology）",
                "value": "A"
            },
            {
                "label": "星狀拓樸（Star Topology）",
                "value": "B"
            },
            {
                "label": "匯流排拓樸（Bus Topology）",
                "value": "C"
            },
            {
                "label": "網狀拓樸（Mesh Topology）",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-04",
        "question": "下列哪一種網路會發生資料碰撞？",
        "options": [
            {
                "label": "Token Ring",
                "value": "A"
            },
            {
                "label": "Ethernet",
                "value": "B"
            },
            {
                "label": "FDDI",
                "value": "C"
            },
            {
                "label": "ATM",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-05",
        "question": "關於 TCP/IP 通訊協定的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "是一種跨平台的通訊協定，不論是Windows、Unix、BSD、Linux、Mac OS、Novell皆有支援",
                "value": "A"
            },
            {
                "label": "Internet 以 TCP/IP 協定為基礎而可以連接全世界的電腦",
                "value": "B"
            },
            {
                "label": "同一個IP位址，可分給不同電腦使用",
                "value": "C"
            },
            {
                "label": "除 Internet 使用亦可適用於LAN",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "1-06",
        "question": "下列哪一個 IP 是屬於 B Class 範圍的 IP？",
        "options": [
            {
                "label": "202.43.195.52",
                "value": "A"
            },
            {
                "label": "61.64.127.7",
                "value": "B"
            },
            {
                "label": "61.64.127.7",
                "value": "C"
            },
            {
                "label": "244.17.200.12",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-07",
        "question": "一部電腦的 IP 為 168.95.0.100、遮罩為 255.255.255.0，請問該電腦區段的廣播位址 IP 為下列哪一項？",
        "options": [
            {
                "label": "168.95.0.100",
                "value": "A"
            },
            {
                "label": "168.95.0.255",
                "value": "B"
            }, 
            {
                "label": "168.95.0.0",
                "value": "C"
            },
            {
                "label": "該區段沒有廣播位址",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-08",
        "question": "下列哪一項屬於 TCP/IP 中的連線型（Connection）協定？",
        "options": [
            {
                "label": "ARP",
                "value": "A"
            },
            {
                "label": "UDP",
                "value": "B" 
            },
            {
                "label": "TCP",
                "value": "C"
            },
            {
                "label": "ICMP", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-09",
        "question": "下列哪一項協定是 TCP/IP 中用來將 IP 位址解析成 MAC 位址？",
        "options": [ 
            {
                "label": "ARP",
                "value": "A"
            },
            {
                "label": "UDP",
                "value": "B" 
            },
            {
                "label": "TCP",
                "value": "C"
            },
            {
                "label": "ICMP", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-10",
        "question": "一部電腦的 IP 為 61.62.0.71、遮罩為 255.255.255.128，請問該電腦區段的 Network IP 為下列哪一項？",
        "options": [
            {
                "label": "61.62.0.0",
                "value": "A"
            },
            {
                "label": "61.62.1.0", 
                "value": "B"
            },
            {
                "label": "61.62.0.255",
                "value": "C"
            },
            {
                "label": "61.62.0.128",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-11",
        "question": "下列哪些指令可以正確啟動網卡介面？（複選）",
        "options": [
            {
                "label": "/etc/rc.d/init.d/network start",
                "value": "A"
            },
            {
                "label": "network start",
                "value": "B"
            },
            {
                "label": "service network start",
                "value": "C"
            },
            {
                "label": "ifup p3p1",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "1-12",
        "question": "下列哪一項可以設定欲提供解析服務之 DNS 主機？",
        "options": [
            {
                "label": "cat/etc/hosts",
                "value": "A"
            },
            {
                "label": "cat/etc/sysconfig/network",
                "value": "B"
            },
            {
                "label": "cat/etc/resolv.conf",
                "value": "C"
            },
            {
                "label": "cat/etc/sysconfig/network-scripts/ifcfg-p3p1",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-13",
        "question": "下列哪一項是屬於封閉迴路，自我測試使用的 IP 位址？",
        "options": [
            {
                "label": "10.0.0.1",
                "value": "A"
            },
            {
                "label": "172.16.0.1", 
                "value": "B"
            },
            {
                "label": "127.0.0.1",
                "value": "C"
            },
            {
                "label": "192.168.0.1",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-14",
        "question": "下列哪一項最適合用來描述星狀拓樸（Star Topology）？",
        "options": [
            {
                "label": "LAN 拓樸是資料從網路工作站透過單一的同軸電纜送出，並由所有其他工作站接收",
                "value": "A"
            },
            {
                "label": "使用一個主幹節點成分枝狀連接到其他節點的 LAN 拓樸",
                "value": "B"
            },
            {
                "label": "以線性鏈結的方式將網路中央節點連接到一個共用中央交換器的 LAN 拓樸",
                "value": "C"
            },
            {
                "label": "中央節點以纜線呈放射狀連接到其他節點的 LAN 拓樸",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-15",
        "question": "下列哪一項是機構單一識別子（Organizational Unique Identifier, OUI）？",
        "options": [
            {
                "label": "MAC 位址中所有的十六進位數字",
                "value": "A"
            },
            {
                "label": "MAC 位址中的前六個十六進位數字",
                "value": "B"
            },
            {
                "label": "MAC 位址中的最後六個十六進位數字",
                "value": "C"
            },
            {
                "label": "所有網路設備型號的字首",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-16",
        "question": "下列哪些是有關於網路的設定檔或目錄？（複選）",
        "options": [
            {
                "label": "/etc/network",
                "value": "A"
            },
            {
                "label": "/etc/sysconfig/network", 
                "value": "B"
            },
            {
                "label": "/etc/network-scripts/ifcfg-p3p1",
                "value": "C"
            },
            {
                "label": "/etc/sysconfig/network-scripts",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "1-17",
        "question": "下列哪些指令可以用來測試網路狀況？（複選）",
        "options": [
            {
                "label": "ping",
                "value": "A"
            },
            {
                "label": "host",
                "value": "B"
            },
            {
                "label": "traceroute",
                "value": "C"
            },
            {
                "label": "nslookup",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "1-18",
        "question": "下列哪一項指令可以啟動網路卡功能？",
        "options": [
            {
                "label": "ifconfig p3p1 enable",
                "value": "A"
            },
            {
                "label": "ifconfig p3p1",
                "value": "B"
            },
            {
                "label": "ifconfig p3p1 netmask 255.255.255.0",
                "value": "C"
            },
            {
                "label": "ifconfig p3p1 up",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-19",
        "question": "在 OSI 模型中，下列哪一層的主要任務是由調節由來源到目的地的資訊流，並且可靠、精確地執行？",
        "options": [
            {
                "label": "展示層（Presentation Layer）",
                "value": "A"
            },
            {
                "label": "會議層（Session Layer）",
                "value": "B"
            },
            {
                "label": "傳輸層（Transport Layer）",
                "value": "C"
            },
            {
                "label": "網路層（Network Layer）",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-20",
        "question": "下列哪一項是開發 TCP/IP 通訊協定的主要目的？",
        "options": [
            {
                "label": "確定能校正每一個錯誤的封包",
                "value": "A"
            },
            {
                "label": "讓合作的電腦能透過網路分享資源",
                "value": "B"
            },
            {
                "label": "分配區域網路內的資源",
                "value": "C"
            },
            {
                "label": "決定封包傳送時的最佳路徑",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-21",
        "question": "下列哪一項不屬於 OSI 模型中的層級？",
        "options": [
            {
                "label": "應用層（Application Layer）",
                "value": "A"
            },
            {
                "label": "傳輸層（Transport Layer）",
                "value": "B"
            },
            {
                "label": "會談層（Session Layer）",
                "value": "C"
            },
            {
                "label": "網際網路層（Internet Layer）",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-22",
        "question": "請問 MAC 是屬於下列 OSI 模型中的哪一層？",
        "options": [
            {
                "label": "實體層（Physical Layer）",
                "value": "A"
            },
            {
                "label": "資料鏈結層（Data Link Layer）",
                "value": "B"
            },
            {
                "label": "網路層（Network Layer）",
                "value": "C"
            },
            {
                "label": "傳輸層（Transport Layer）",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-23",
        "question": "關於 MAC 位址的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "四組八個二進位的數字組成，組與組之間用一個小數點分開",
                "value": "A"
            },
            {
                "label": "四個十進位的數字組成，數字之間用一個小數點分開",
                "value": "B"
            },
            {
                "label": "六個十六進位的數字組成",
                "value": "C"
            },
            {
                "label": "十二個十六進位的數字組成",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-24",
        "question": "下列哪一項為一個有效的私人 Class C IP 位址範圍？",
        "options": [
            {
                "label": "192.168.0.0 through 192.168.255.255",
                "value": "A"
            },
            {
                "label": "10.0.0.0 through 10.255.255.255", 
                "value": "B"
            },
            {
                "label": "192.168.0.0 through 192.168.0.255",
                "value": "C"
            },
            {
                "label": "10.1.0.0 through 10.1.255.255",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-25",
        "question": "下列哪一項指令可用來測試網路內部的節點？",
        "options": [ 
            {
                "label": "Ping 10.10.10.1",
                "value": "A"
            },
            {
                "label": "Ping 192.168.1.1", 
                "value": "B"
            },
            {
                "label": "Ping 127.0.0.1",
                "value": "C"
            },
            {
                "label": "Ping 255.255.255.255",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-26",
        "question": "下列哪一項為 ICMP 協定的功能？",
        "options": [
            {
                "label": "它提供控制和傳送訊息的能力",
                "value": "A"
            },
            {
                "label": "它提供位址解析的服務",
                "value": "B"
            },
            {
                "label": "它支援 e-mail 的功能",
                "value": "C"
            },
            {
                "label": "它提供遠端登入的功能",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-27",
        "question": "下列哪一項提供將 IP 位址轉成 MAC 位址的能力？",
        "options": [
            {
                "label": "ARP",
                "value": "A"
            },
            {
                "label": "forward DNS",
                "value": "B"
            },
            {
                "label": "RARP",
                "value": "C"
            },
            {
                "label": "reverse DNS",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-28",
        "question": "下列哪一項為乙太網路所使用的 MAC Method？",
        "options": [
            {
                "label": "CSMA/CD",
                "value": "A"
            },
            {
                "label": "SLIP",
                "value": "B"
            },
            {
                "label": "PPP",
                "value": "C"
            },
            {
                "label": "10BaseT",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-29",
        "question": "關於 PPP 協定的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "是一種為了讓封包能透過序列埠傳送的一種協定",
                "value": "A"
            },
            {
                "label": "PPP 沒有雙方建立協商機制",
                "value": "B" 
            },
            {
                "label": "PPP 在傳送資料前可以驗證身分資料",
                "value": "C"
            },
            {
                "label": "PPP 只支援 TCP/IP 協定",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "1-30",
        "question": "關於乙太網路卡 MAC 位址的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "共6個 bytes",
                "value": "A"
            },
            {
                "label": "前3個 bytes 為流水編號，後3個 bytes 為廠商編號",
                "value": "B"
            },
            {
                "label": "每一網卡的 MAC 位址都是唯一的",
                "value": "C"  
            },
            {
                "label": "網路卡製造廠必須向 IEEE 註冊取得專屬的 MAC 編號段",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "1-31",
        "question": "系統中只有一張網路卡，如果要變更 Default Gateway 的設定，應該要變更下列哪一項檔案的內容？",
        "options": [
            {
                "label": "/etc/network/default-route",
                "value": "A"
            },
            {
                "label": "/etc/default-route", 
                "value": "B"
            },
            {
                "label": "/etc/network-scripts/route",
                "value": "C"
            },
            {
                "label": "/etc/sysconfig/network-scripts/ifcfg-p3p1",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-32",
        "question": "無線網卡已安裝於系統中且可以被掛載使用，如果查詢及設定該無線網卡，最佳的設定指令為下列哪一項？",
        "options": [
            {
                "label": "ifup-wireless",
                "value": "A"
            },
            {
                "label": "iwconfig", 
                "value": "B"
            },
            {
                "label": "iwlist",
                "value": "C" 
            },
            {
                "label": "iflist",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-33",
        "question": "下列哪一項服務不是使用 UDP 協定在傳輸資料？",
        "options": [
            {
                "label": "RIP",
                "value": "A"
            },
            {
                "label": "TFTP", 
                "value": "B"
            },
            {
                "label": "SMTP",
                "value": "C"
            },
            {
                "label": "SNMP",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-34",
        "question": "IPV4 的使用是將 32 位元的 IP 位址以 Class A-E 五個等級來劃分，請問下列哪一個等級是屬於實驗用途專用？",
        "options": [
            {
                "label": "Class D",
                "value": "A"
            },
            {
                "label": "Class E", 
                "value": "B"
            },
            {
                "label": "Class C",
                "value": "C"
            },
            {
                "label": "Class A",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "1-35",
        "question": "TTL 是 IP 封包中的一個值，主要是用於檢查該封包在網路存在的時間是否過久而被丟棄，若要改變其預設值，應將指令 net.ipv4.ip_default_ttl = <0-255> 寫入下列哪一個檔案？",
        "options": [
                {
                    "label": "/etc/sysconfig/network-scripts/ifcfg-p3p1",
                    "value": "A"
                },
                {
                    "label": "/etc/sysconfig/network",
                    "value": "B"
                }, 
                {
                    "label": "/etc/sysctl.conf",
                    "value": "C"
                },
                {
                    "label": "/etc/sys.conf", 
                    "value": "D"
                }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-36",
        "question": "在網路範圍 192.168.1.128/26 之中，共有多少個 IP？",
        "options": [
            {
                "label": "256",
                "value": "A"
            },
            {
                "label": "128", 
                "value": "B"
            },
            {
                "label": "64",
                "value": "C" 
            },
            {
                "label": "32",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-37",
        "question": "使用下列哪一項指令，可將網路介面卡（例如網路卡）啟用？",
        "options": [
            {
                "label": "ifconfig <device> connect",
                "value": "A"
            },
            {
                "label": "ifconfig <device> init",
                "value": "B"
            },
            {
                "label": "ifstart <device>",
                "value": "C"
            },
            {
                "label": "ifup <device>",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "1-38",
        "question": "請問網路範圍 10.1.5.34/29 是落於下列哪一個網路區段？",
        "options": [
            {
                "label": "10.1.5.32",
                "value": "A"
            },
            {
                "label": "10.1.5.0", 
                "value": "B"
            },
            {
                "label": "10.1.5.16",
                "value": "C"
            },
            {
                "label": "10.5.1.8", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "1-39",
        "question": "TCP three-way shake 中，各封包中所舉的旗標依序各為下列哪一項？",
        "options": [
            {
                "label": "SYN > RCV/ACK > ACK",
                "value": "A"
            },
            {
                "label": "SYN > SYN/ACK > SYN/ACK",
                "value": "B"
            },
            {
                "label": "SYN > SYN/ACK > ACK",
                "value": "C"
            },
            {
                "label": "SYN > RCV/ACK > SYN/ACK",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "1-40",
        "question": "請問下列哪些為 Private IP Address？（複選）",
        "options": [
            {
                "label": "192.168.255.33",
                "value": "A"
            },
            {
                "label": "172.23.10.240", 
                "value": "B"
            },
            {
                "label": "10.255.1.132",
                "value": "C"
            },
            {
                "label": "172.32.233.12",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "2-01",
        "question": "下列哪一項是 SSH 替代 Telnet 的最主要原因？",
        "options": [
            {
                "label": "在 Telnet 上傳輸資訊時所有資料都是明文，未經編碼",
                "value": "A"
            },
            {
                "label": "在 Telnet 上使用者的認證要花上不少時間",
                "value": "B"
            },
            {
                "label": "SSH 使用了比複數的連結，因此通訊速度更快",
                "value": "C"
            },
            {
                "label": "SSH 比較不會對伺服器造成負擔",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "2-02",
        "question": "下列哪些指令可以列出路由表？（複選）",
        "options": [
            {
                "label": "route",
                "value": "A"
            },
            {
                "label": "netstat -n",
                "value": "B"
            },
            {
                "label": "netstat",
                "value": "C"
            },
            {
                "label": "netstat -r",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],  
        "type": "multiple"
    },
    {
        "id": "2-03",
        "question": "下列哪一項指令可將路由快取清除？",
        "options": [
            {
                "label": "route --clean",
                "value": "A"
            },
            {
                "label": "route --flush",
                "value": "B"
            },
            {
                "label": "route -no-cache",
                "value": "C"
            },
            {
                "label": "ip route flush cache",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "2-04",
        "question": "下列哪一項服務可以提供網路參數給用戶端電腦，使其自動設定網路的功能？",
        "options": [
            {
                "label": "DNS",
                "value": "A"
            },
            {
                "label": "SSH",
                "value": "B"
            },
            {
                "label": "DHCP",
                "value": "C"
            },
            {
                "label": "RCH",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-05",
        "question": "假設在某一網路內部有相當多的路由器，應該使用下列哪一種方法來增進路由效率並減少對網路的維護？",
        "options": [
            {
                "label": "於每一個路由器上設置靜態路由並定期檢查路由是否有誤",
                "value": "A"
            },
            {
                "label": "運用動態路由協定 OSPF 於路由器",
                "value": "B"
            },
            {
                "label": "用星狀的拓樸使路由路徑最短",
                "value": "C"
            },
            {
                "label": "用匯流排方式的拓樸使路由路徑最短",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-06",
        "question": "在 /etc/sysctl.conf 檔案中，新增下列哪一項內容並設定為1，在重新啟動時亦可以啟動系統中的路由功能？",
        "options": [
            {
                "label": "net.ipv4.conf.default.rp_filter = 1",
                "value": "A"
            },
            {
                "label": "net.ipv4.ip_forward = 1",
                "value": "B"
            },
            {
                "label": "kernel.sysrq = 1",
                "value": "C"
            },
            {
                "label": "kernel.core_uses_pid = 1",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-07",
        "question": "用 Linux 登入另一台 Linux SSH Server，請問下列哪些項目可以在登入 SSH Server 時即切換 lisa User 身分？（複選）",
        "options": [
            {
                "label": "ssh -l lisa 192.168.10.5（註：-l 為小寫L）",
                "value": "A"
            },
            {
                "label": "ssh lisa@192.168.10.5",
                "value": "B"
            },
            {
                "label": "ssh -u lisa 192.168.10.5",
                "value": "C"
            },
            {
                "label": "ssh -p lisa 192.168.10.5",
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "2-08",
        "question": "請問 TCP/IP 22 埠為下列哪一項 Daemonm 所使用？",
        "options": [
            {
                "label": "Telnet Server",
                "value": "A"
            },
            {
                "label": "FTP Server",
                "value": "B"
            },
            {
                "label": "SSH Server",
                "value": "C"
            },
            {
                "label": "SMTP Server",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-09",
        "question": "請問 Telnet 啟動後會開啟下列哪一項埠號？",
        "options": [
            {
                "label": "20",
                "value": "A"
            },
            {
                "label": "21",
                "value": "B"
            },
            {
                "label": "22",
                "value": "C"
            },
            {
                "label": "23",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "2-10",
        "question": "下列哪一項檔案室用來設定一台電腦的網路處理程序埠？",
        "options": [
            {
                "label": "/etc/services",
                "value": "A"
            },
            {
                "label": "/etc/xinetd.conf",
                "value": "B"
            },
            {
                "label": "/etc/hosts",
                "value": "C"
            },
            {
                "label": "/etc/hosts.allow",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "2-11",
        "question": "下列哪些是關於網路卡的設定檔或目錄？（複選）",
        "options": [
            {
                "label": "/etc/hosts",
                "value": "A"
            },
            {
                "label": "/etc/sysconfig/network",
                "value": "B"
            },
            {
                "label": "/etc/network-scripts/ifcfg-p7p1",
                "value": "C"
            },
            {
                "label": "/etc/sysconfig/network-scripts",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "2-12",
        "question": "關於 Telnet 伺服器的敘述，下列哪些錯誤？（複選）",
        "options": [
                {
                    "label": "預設限制 root 不能登入系統",
                    "value": "A"
                },
                {
                    "label": "在預設的狀況下，只要開啟 Telnet 服務，所有使用者都能登入系統",
                    "value": "B"
                },
                {
                    "label": "在 /etc/nologin 檔案中可設定不可登入的使用者清單",
                    "value": "C"
                },
                {
                    "label": "若在設定 /etc/nologin 時已有使用者登入系統會立刻被強迫登出",
                    "value": "D"
                }
        ],
        "answer": ["B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-13",
        "question": "執行 route 指令查看路由表時，Default Gateway 的 Flags 為 UG，請問代表下列哪一項意思？",
        "options": [
            {
                "label": "停止該筆 m 記錄預設路由的功能",
                "value": "A"
            },
            {
                "label": "使用動態路由，恢復路由資訊的旗標",
                "value": "B"
            },
            {
                "label": "這個路由將不會被接受",
                "value": "C"
            },
            {
                "label": "標示路由已啟動且需要透過 Gateway 轉遞封包",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "2-14",
        "question": "加入一路由於系統中，下列哪一個指令正確？",
        "options": [
            {
                "label": "route add -net 192.168.10.1 netmask 255.255.255.0 eth0",
                "value": "A"
            },
            {
                "label": "route add -host 192.168.1.245 dev eth0",
                "value": "B"
            },
            {
                "label": "route add default gw eth0 172.23.0.254",
                "value": "C"
            },
            {
                "label": "routeadd gw 172.23.0.254",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-15",
        "question": "欲顯示主機目前的路由表，可執行下列哪一個指令？",
        "options": [
                {
                    "label": "tracert",
                    "value": "A"
                },
                {
                    "label": "traceroute",
                    "value": "B"
                },
                {
                    "label": "route -n",
                    "value": "C"
                },
                {
                    "label": "netstat -rn",
                    "value": "D"
                }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-16",
        "question": "要檢查自己的機器和遠端機器之間的路徑，可使用下列哪一項指令？",
        "options": [
            {
                "label": "/usr/sbin/tracert",
                "value": "A"
            },
            {
                "label": "/usr/bin/tracertoute",
                "value": "B"
            },
            {
                "label": "/bin/ping",
                "value": "C"
            },
            {
                "label": "/sbin/route",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-17",
        "question": "下列哪些指令可在路由表上設定預設路徑？（複選）",
        "options": [
            {
                "label": "route default Gateway_IP",
                "value": "A"
            },
            {
                "label": "route default gw Gateway_IP",
                "value": "B"
            },
            {
                "label": "route add default gw Gateway_IP",
                "value": "C"
            },
            {
                "label": "route add -net default gw Gateway_IP",
                "value": "D"
            }
        ],
        "answer": ["C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-18",   
        "question": "下列哪些是路由表上提供的資訊？（複選）",
        "options": [
            {
                "label": "Source IP Address",
                "value": "A"
            },
            {
                "label": "Destination IP Address",
                "value": "B"
            },
            {
                "label": "Inbound Interface",
                "value": "C"
            },
            {
                "label": "Outbound Interface",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "2-19",
        "question": "核心的IP 路由資訊會反映在下列哪一個檔案？",
        "options": [
            {
                "label": "/proc/net/route_table",
                "value": "A"
            },
            {
                "label": "/proc/net/ipx_route",
                "value": "B"
            },
            {
                "label": "/proc/net/route",
                "value": "C"
            },
            {
                "label": "/proc/net/default_route",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-20",
        "question": "下列哪些為 scp 的參數？（複數）",
        "options": [
            {
                "label": "-r",
                "value": "A"
            },
            {
                "label": "-q",
                "value": "B"
            },
            {
                "label": "-p",
                "value": "C"
            },
            {
                "label": "-o",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-21",
        "question": "下列哪一個指令是用來將路徑加入 Linux 的路由表？",
        "options": [
            {
                "label": "addroute",
                "value": "A"
            },
            {
                "label": "route",
                "value": "B"
            },
            {
                "label": "netstat",
                "value": "C"
            },
            {
                "label": "net",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-22",
        "question": "啟動在 /etc/xinetd.d 目錄中的服務，必須在目錄中的檔案裡，設定下列哪一項變數？",
        "options": [
            {
                "label": "disable = no",
                "value": "A"
            },
            {
                "label": "wait = no",
                "value": "B"
            },
            {
                "label": "disable = yes",
                "value": "C"
            },
            {
                "label": "wait = yes",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "2-23",
        "question": "關於 SSH 的指令運用，下列哪些正確？（複選）",
        "options": [
            {
                "label": "scp root@192.168.1.2:/root/install.log /tmp/testit 以上指令會將 192.168.1.2 的主機中 /root 目錄下的檔案 install.log 拷貝到本地端的 /tmp/testit",
                "value": "A"
            },
            {
                "label": "SFTP 可以做到類似 FTP 指令的功能，而且傳輸過程具加密機制",
                "value": "B"
            },
            {
                "label": "OpenSSH 的 SFTP 可以將整個本地端的目錄及其內的檔案一次上傳至遠端主機中",
                "value": "C"
            },
            {
                "label": "SFTP 不能用 root 權限登入遠端主機",
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "2-24",
        "question": "關於SCP、SSH 及Telnet 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "SSH 會對資料內容加密但 Telnet 不會",
                "value": "A"
            },
            {
                "label": "SCP 和 Telnet 均可以傳送資料到不同的電腦上",
                "value": "B"
            },
            {
                "label": "\"ssh foo@server.foo.net last\" 表示使用者想要於 server.foo.net 上以使用者 foo 的權限執行指令 last ",
                "value": "C"
            },
            {
                "label": "SSH 使用 port 22，Telnet 則使用 23",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-25",
        "question": "下列哪些指令可啟動系統的路由功能？（複選）",
        "options": [
            {
                "label": "echo \"0\" > /proc/sys/net/ipv4/ip_forward",
                "value": "A"
            },
            {
                "label": "echo \"1\" > /proc/sys/net/ipv4/ip_forward",
                "value": "B"
            },
            {
                "label": "sysctl -w net.ipv4.conf.all.fowarding = 1",
                "value": "C"
            },
            {
                "label": "sysctl -w net.ipv4.conf.all.forwarding = 0",
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "2-26",
        "question": "在 SSH 中，壓縮的選項為下列哪一項？",
        "options": [
            {
                "label": "-c",
                "value": "A"
            },
            {
                "label": "-z",
                "value": "B"
            },
            {
                "label": "-C",
                "value": "C"
            },
            {
                "label": "-Z",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-27",
        "question": "關於路由表的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "路由表只看網路層資料來決定封包的路由",
                "value": "A"
            },
            {
                "label": "在路由表中，每個介面只能有一條路由規則",
                "value": "B"
            },
            {
                "label": "路由表亦能用來路由封包於同一個網段區域網路",
                "value": "C"
            },
            {
                "label": "路由表也可以依傳輸層資料來絕決定封包的路由",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "2-28",
        "question": "關於設定檔的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "hosts.allow 指令允許那些主機的使用者可以使用本機所提供的網路服務",
                "value": "A"
            },
            {
                "label": "hosts-deny 此檔預設沒有任何設定值，會拒絕所有主機的使用者使用本機所提供的網路服務",
                "value": "B"
            },
            {
                "label": "hosts 包含主機網域名稱與 IP 位址的對應",
                "value": "C"
            },
            {
                "label": "hosts.conf 設定本機的網路組態",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "2-29",
        "question": "下列哪一項可防止路由迴圈的發生？",
        "options": [
            {
                "label": "使用來源 IP 位址為路由的基準",
                "value": "A"
            },
            {
                "label": "使用 TTL（Time to Live）",
                "value": "B"
            },
            {
                "label": "使用 Spanning Tree",
                "value": "C"
            },
            {
                "label": "增加路由器的數量",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-30",
        "question": "關於 SSH 伺服器的敘述，下列哪一項錯誤？（複選）",
        "options": [
            {
                "label": "預設限制 root 不能登入系統",
                "value": "A"
            },
            {
                "label": "在用戶端的使用者家目錄下的 ~/.ssh/known_hosts 會記錄曾經連線過的主機的 public key",
                "value": "B"
            },
            {
                "label": "在 /etc/nologin 檔案中可設定 SSH 不可登入的使用者清單",
                "value": "C"
            },
            {
                "label": "使用 SSH 連線遠端主機時如果不寫帳號，系統將以本地端電腦的帳號來嘗試登入",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "2-31",
        "question": "下列哪一個服務通常不透過 /etc/xinetd.d 來管理？",
        "options": [
            {
                "label": "Finger",
                "value": "A"
            },
            {
                "label": "Time",
                "value": "B"
            },
            {
                "label": "SSH",
                "value": "C"
            },
            {
                "label": "Telnet",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-32",
        "question": "下列哪一項為 SSH 使用的埠號？",
        "options": [
            {
                "label": "21",
                "value": "A"
            },
            {
                "label": "22",
                "value": "B"
            },
            {
                "label": "23",
                "value": "C"
            },
            {
                "label": "25",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-33",
        "question": "如附圖所示的路由表，請問下列敘述哪一項正確？",
        "media": {
            "type": "table",
            "data": [
                ["Kernel IP routing table"],
                [["Destination",  "Gateway",        "Genmask",            "Flags",   "MSS",   "Window",  "irtt",  "Iface"]],
                [["192.168.6.0",  "0.0.0.0",        "255.255.255.224",    "U",       "0",     "0",       "0",     "em2"]],
                [["10.1.1.0",     "0.0.0.0",        "255.255.255.0",      "U",       "0",     "0",       "0",     "p3p1"]],
                [["192.168.8.0",  "0.0.0.0",        "255.255.255.0",      "U",       "0",     "0",       "0",     "em1"]],
                [["192.168.8.32", "0.0.0.0",        "255.255.255.224",    "U",       "0",     "0",       "0",     "p3p2"]],
                [["172.16.1.8",   "0.0.0.0",        "255.255.255.248",    "U",       "0",     "0",       "0",     "ipip0"]],
                [["172.16.1.0",   "0.0.0.0",        "255.255.255.0",      "U",       "0",     "0",       "0",     "ppp0"]],
                [["0.0.0.0",      "10.1.1.254",     "0.0.0.0",            "UG",      "0",     "0",       "0",     "p3p1"]]
            ]
        },
        "options": [
            {
                "label": "192.168.6.65 會路由至介面 em2",
                "value": "A"
            },
            {
                "label": "192.168.8.16 會路由至介面 em1",
                "value": "B"
            },
            {
                "label": "192.168.8.16 會路由至介面 p3p1",
                "value": "C"
            },
            {
                "label": "172.16.1.13 會路由至介面 ppp0",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-34",
        "question": "如附圖所示為某台主機的部分路由表片段，請問下列敘述那些錯誤？（複選)",
        "media": {
            "type": "table",
            "data": [
                [["Destination",    "Gateway",         "Genmask",            "Flags",   "Iface"]],
                [["220.142.22.29",  "*",               "255.255.255.255",    "UH",      "ppp0"]],
                [["10.0.1.128",     "*",               "255.255.255.224",    "U",       "p3p1"]],
                [["10.0.1.0",       "*",               "255.255.255.224",    "U",       "em2"]],
                [["192.168.100.0",  "*",               "255.255.255.0",      "U",       "em1"]],
                [["127.0.0.0",      "*",               "255.0.0.0",          "U",       "lo"]],
                [["0.0.0.0",        "220.142.22.29",   "0.0.0.0",            "UG",      "ppp0"]]
            ]
        },
        "options":[
            {
                "label": "該主機總共接了四片網路卡",
                "value": "A"
            },
            {
                "label": "以撥接或 ADSL 的方式對外通聯",
                "value": "B"
            },
            {
                "label": "該主機的 IP 為 10.0.1.128",
                "value": "C"
            },
            {
                "label": "從路由表中看不出預設閘道為何",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-35",
        "question": "如附圖所示為 /etc/xinetd.d/wu-ftpd 檔案的內容，請問下列敘述哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                [
                    ["service ftp {"],
                    ["  ....."],
                    ["  disable     = no"],
                    ["  socket_type = stream"], 
                    ["  wait        = yes"],
                    ["  user        = root"],
                    ["  bind        = 192.168.100.23"],
                    ["  only_from   = 192.168.100.0/24"],
                    ["  no_access   = 192.168.100.{10, 15, 30}"],
                    ["  server      = /usr/sbin/in.ftpd"],
                    ["  ....."],
                    ["}"]
                ]
            ]
        },
        "options": [
            {
                "label": "連線後均成為 root 使用者",
                "value": "A"
            },
            {
                "label": "只有送給 192.168.100.23 這個 IP 的請求才被執行",
                "value": "B"
            },
            {
                "label": "只限於 192.168.100.0/24 這個 Subnet 主機連上來，但 192.168.100.10、192.168.100.15 和 192.168.100.30 則被禁止",
                "value": "C"
            },
            {
                "label": "服務的連線類型為TCP",
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "2-36",
        "question": "關於封包與路由的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "封包被拆解至網路層，系統檢視其來源位址，並比對路由表後決定其路由",
                "value": "A"
            },
            {
                "label": "封包被拆解至網路層， 系統檢視其來源及目的地位址，並比對路由表後決定其路由",
                "value": "B"
            },
            {
                "label": "封包被拆解至網路層，系統檢視其目的地位址，並比對路由表後決定其路由",
                "value": "C"
            },
            {
                "label": "封包被拆解至網路層，系統檢視其目的地連接埠，並比對路由表後決定其路由",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "2-37",
        "question": "關於 Inetd 及 Xinetd 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Inetd 及 Xinetd 都是 Interner Service Daemon 的一種，二者均會監聽特定的 port，一旦建立連線，Inetd 及 Xinetd 均會啟動特定的 Daemon 來處理此一連線",
                "value": "A"
            },
            {
                "label": "可以利用 /etc/hosts.allow 及 /etc/hosts.deny 來設定限制 Daemon 的連線範圍",
                "value": "B"
            },
            {
                "label": "Inetd 比 Xinetd 的功能還要強大，而且也比較具安全性",
                "value": "C"
            },
            {
                "label": "Xinetd 可在本身的設定檔中，設定連線範圍限制以及 Daemon 服務時段限制",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "2-38",
        "question": "下列哪些是 SFTP 和 FTP 的差異？（複選）",
        "options": [
            {
                "label": "使用公開金鑰加密",
                "value": "A"
            },
            {
                "label": "上傳檔案",
                "value": "B"
            },
            {
                "label": "下載檔案",
                "value": "C"
            },
            {
                "label": "可以透過 Non-interactive 認證模式使用",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "2-39",
        "question": "使用下列哪一項指令可得知有哪些有效的網路介面可以使用？",
        "options": [
            {
                "label": "netstat -r",
                "value": "A"
            },
            {
                "label": "ifconfig",
                "value": "B"
            },
            {
                "label": "netcfg",
                "value": "C"
            },
            {
                "label": "cat/net.status",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "2-40",
        "question": "關於 Telnet 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Telnet Server 預設的 Listen Port 為 21",
                "value": "A"
            },
            {
                "label": "Telnet 是 TCP 協定家族的一種",
                "value": "B"
            },
            {
                "label": "Telnet Client 端指令通常也較 telnet，telnet 指令不能連接 SMTP 通道",
                "value": "C"
            },
            {
                "label": "登入 Telnet Server 時，通常需驗證帳號密碼，其中密碼是以明文在網路上傳遞",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "3-01",
        "question": "用戶端在 DHCP 伺服器成功取得 IP 資訊後，預設下次會要求取相同的 IP， 如果想要放棄先前以獲取的 IP 重新向 DHCP 伺服器索取新的 IP，應該修訂或者刪除下列哪一個檔案？",
        "options": [
            {
                "label": "/etc/sysconfig/network-scripts/ifcfg-*",
                "value": "A"
            },
            {
                "label": "/etc/rc.d/init.d/network",
                "value": "B"
            },
            {
                "label": "/etc/sysctl.conf",
                "value": "C"
            },
            {
                "label": "/var/lib/dhclient/ dhclient*.lease",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-02",
        "question": "下列哪些方式可讓有十個以上區域網的公司，以一個 DHCP 伺服器供給所有用戶端的所需資料？（複選）",
        "options": [
            {
                "label": "公司內的交換機需支援 DHCP Relay 的功能來代理用戶端的要求",
                "value": "A"
            },
            {
                "label": "在無 DHCP Relay 的功能狀況下，每一個區網必須要架設一台 DHCP 伺服器",
                "value": "B" 
            },
            {
                "label": "公司內的路由器需要支援 DHCP Relay 的功能來代理用戶端的要求",
                "value": "C"
            },
            {
                "label": "DHCP 伺服器一次最多只能支援六個區網，所以我們至少需要兩個 DHCP 伺服器",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "3-03",
        "question": "用戶端向 NFS 伺服器掛載目錄存取檔案使 NFS 服務並不需要任何 Daemon 程式，但可執行下列哪一程式已提高 NFS 的效能？",
        "options": [
            {
                "label": "nfsiod",
                "value": "A"
            },
            {
                "label": "rpcbind",
                "value": "B"
            }, 
            {
                "label": "nfsd",
                "value": "C"
            },
            {
                "label": "portmap", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-04",
        "question": "設定下列哪一項 NFS 設定檔的參數，可以不讓 Client 端以 root 的身分使用你所分享出來的目錄與檔案？",
        "options": [
            {
                "label": "all_squash",
                "value": "A"
            },
            {
                "label": "nfsnobody",
                "value": "B"
            },
            {
                "label": "root_squash",
                "value": "C"
            },
            {
                "label": "no_root_squash",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-05",
        "question": "關於 DHCP 敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "DHCP 伺服器所用的 Port 位址為 23",
                "value": "A"
            },
            {
                "label": "一般被套用到的 Port 編號與通訊協定的對應關係只是記在 /etc/services 中",
                "value": "B"
            },
            {
                "label": "由於 DHCP 使用廣播方式發起通訊，所以只能侷限在單一子網內",
                "value": "C"
            },
            {
                "label": "lease-time 是指從 DHCP 伺服器分配到的 IP 位址可使用的時間",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-06",
        "question": "下列哪些 rpm 指令可用來查詢 DHCP 套件是否安裝？（複選）",
        "options": [
            {
                "label": "rpm -qa | grep dhcp",
                "value": "A"
            },
            {
                "label": "rpm -ql dhcp",
                "value": "B"
            },
            {
                "label": "rpm -q dhcp",
                "value": "C"
            },
            {
                "label": "rpm -qp dhcp",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "3-07",
        "question": "下列哪一項是 DHCP Server 設定檔位置及檔名？",
        "options": [
            {
                "label": "/etc/dhcp.conf",
                "value": "A"
            },
            {
                "label": "/etc/dhcpd.conf",
                "value": "B"
            },
            {
                "label": "/etc/dhcp/dhcp.conf",
                "value": "C"
            },
            {
                "label": "/etc/dhcp/dhcpd.conf",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-08",
        "question": "NFS Server 的用途為下列哪一項？",
        "options": [
            {
                "label": "動態分配 IP 的伺服器",
                "value": "A"
            },
            {
                "label": "檔案分享給 Windows 用戶",
                "value": "B"
            },
            {
                "label": "Linux 的時間伺服器",
                "value": "C"
            },
            {
                "label": "檔案分享給 Linux/Unix/BSD 用戶",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-09",
        "question": "下列哪一項為 NFS Server 分享目錄的設定檔？",
        "options": [
            {
                "label": "/etc/services",
                "value": "A"
            },
            {
                "label": "/usr/share/nfs",
                "value": "B"
            },
            {
                "label": "/etc/exports",
                "value": "C"
            },
            {
                "label": "/proc/filesystem",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-10",
        "question": "NFS Server 的 IP 為 192.168.10.5，請問其它電腦可由下列哪一項指令查看該電腦分享的目錄？",
        "options": [
            {
                "label": "showmount 192.168.10.5",
                "value": "A"
            },
            {
                "label": "showmount -f 192.168.10.5",
                "value": "B"
            },
            {
                "label": "showmount -h 192.168.10.5",
                "value": "C"
            },
            {
                "label": "showmount -e 192.168.10.5",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-11",
        "question": "下列哪一項是 Samba Server 的設定檔？",
        "options": [
            {
                "label": "/etc/samba.conf",
                "value": "A"
            },
            {
                "label": "/etc/samba/samba.conf", 
                "value": "B"
            },
            {
                "label": "/etc/smb/samba.conf",
                "value": "C" 
            },
            {
                "label": "/etc/samba/smb.conf",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-12",
        "question": "Samba Server 的 IP 為192.168.10.3，請問可由下列哪一項指令查詢該 Samba 分享目錄？",
        "options": [
            {
                "label": "smblient -L //192.168.10.3",
                "value": "A"
            },
            {
                "label": "smbclient -I //192.168.10.3", 
                "value": "B"
            },
            {
                "label": "smbmount -L //192.168.10.3",
                "value": "C"
            },
            {
                "label": "smbmount -D //192.168.10.3",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-13",
        "question": "如果想要在純 Linux 網路環境下建立提供遠端掛載的 Linux 分割區，應該安裝下列哪一種服務？",
        "options": [
            {
                "label": "SMB",
                "value": "A"
            },
            {
                "label": "FIPS", 
                "value": "B"
            },
            {
                "label": "DNS",
                "value": "C"
            },
            {
                "label": "NFS",
                "value": "D" 
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-14",
        "question": "下列哪一項是直接掛載 Samba 分享的最佳指令？",
        "options": [
            {
                "label": "smbclient",
                "value": "A"
            },
            {
                "label": "mount -t cifs",
                "value": "B"
            },
            {
                "label": "smbfs",
                "value": "C"
            },
            {
                "label": "smb",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-15",
        "question": "下列哪一種服務可以處理檔案分享及列印分享？",
        "options": [
            {
                "label": "SMB",
                "value": "A"
            },
            {
                "label": "NFS",
                "value": "B"
            },
            {
                "label": "FTP", 
                "value": "C"
            },
            {
                "label": "HTTP",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-16",
        "question": "在 Samba 2.0 版本以後，下列哪一項設定工具是以瀏覽器當作設定介面？",
        "options": [
            {
                "label": "linuxconf",
                "value": "A"
            },
            {
                "label": "SMB", 
                "value": "B"
            },
            {
                "label": "SWAT",
                "value": "C"
            },
            {
                "label": "NMB",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-17",
        "question": "在 DHCP 用戶端的主機上，下列哪一項設定檔包含啟動 DHCP 的設定？",
        "options": [
            {
                "label": "/etc/sysconfig/network-scripts//ifcfg-p3p1",
                "value": "A"
            },
            {
                "label": "/etc/services", 
                "value": "B"
            },
            {
                "label": "/etc/dhcpd.conf",
                "value": "C"
            },
            {
                "label": "/etc/sysconfig/network",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-18",
        "question": "下列哪些資料可以透過 DHCP 伺服器取得？（複選）",
        "options": [
            {
                "label": "IP address",
                "value": "A"
            },
            {
                "label": "Gateway", 
                "value": "B"
            },
            {
                "label": "Netmask",
                "value": "C"
            },
            {
                "label": "DNS Server IP",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "3-19",
        "question": "下列哪一項指令可以得知 NFS 伺服器分享的目錄和權限？",
        "options": [
            {
                "label": "showmount",
                "value": "A"
            },
            {
                "label": "show",
                "value": "B"
            },
            {
                "label": "rpcinfo",
                "value": "C"
            },
            {
                "label": "nfsmount",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-20",
        "question": "在 NFS Server 的 /etc/exports 檔案中，下列哪些設定正確？（複選）",
        "options": [
            {
                "label": "/master (rw) trusty (rw, no_root_squash)",
                "value": "A"
            },
            {
                "label": "/projects proj*.local.domain (rw)",
                "value": "B"
            },
            {
                "label": "/usr *.local.domain (ro) @trusted (rw)",
                "value": "C"
            },
            {
                "label": "/pub (ro, insecure, all_squash)",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "3-21",
        "question": "下列哪些是 Samba Server 組態檔 /etc/samba/smb.conf 的全域指令？（複選）",
        "options": [
            {
                "label": "workgroup",
                "value": "A"
            },
            {
                "label": "comment", 
                "value": "B"
            },
            {
                "label": "hosts allow",
                "value": "C"
            },
            {
                "label": "hosts deny",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "3-22",
        "question": "關於 dhcpd.conf 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "dhcpd.conf 中，參數設定結束應以 ; 號結束，而宣告則必須用 { } 括住宣告主體",
                "value": "A"
            },
            {
                "label": "dhcpd.conf 中的設定會區分大小寫",
                "value": "B" 
            },
            {
                "label": "dhcpd.conf 中只能設定動態分配的 IP 範圍，不能指定特定 Client 使用固定 IP",
                "value": "C"
            },
            {
                "label": "若主機上有二片網卡分別代表二個不同的網段，則 dhcpd.conf 就要有兩個 subnet 的宣告才行",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "3-23",
        "question": "NFS 透過下列哪一項協定存取遠端主機中的檔案？",
        "options": [
            {
                "label": "SMB",
                "value": "A"
            },
            {
                "label": "Appletalk", 
                "value": "B"
            },
            {
                "label": "MMS",
                "value": "C"
            },
            {
                "label": "RPC",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-24",
        "question": "NFS 利用下列哪一個 Daemon 來動態指定通訊埠？",
        "options": [
            {
                "label": "status",
                "value": "A"
            },
            {
                "label": "nfs",
                "value": "B"
            },
            {
                "label": "rpcbind",
                "value": "C"
            },
            {
                "label": "nlockmgr",
                "value": "D" 
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-25",
        "question": "欲得知 NSF Server 啟動後各個 Daemon 的執行狀況，可使用下列哪一個指令進行查詢？",
        "options": [
            {
                "label": "status",
                "value": "A"
            },
            {
                "label": "rpcinfo -p",
                "value": "B"
            },
            {
                "label": "showport", 
                "value": "C"
            },
            {
                "label": "lsof",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-26",
        "question": "下列哪些服務其 Client 端可以把 Server 端的目錄資源掛載到自己的檔案系統中？（複選）",
        "options": [
            {
                "label": "NFS",
                "value": "A"
            },
            {
                "label": "FTP", 
                "value": "B"
            },
            {
                "label": "Samba",
                "value": "C"
            },
            {
                "label": "SFTP",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "3-27",
        "question": "在 NFS Server 裡的分享控制檔，有一列設定為 /share mtc(rw,no_all_squash)，請問下列哪一項敘述正確？",
        "options": [
            {
                "label": "mtc 主機可掛載 /share 目錄，能用 nobody 或 nfsnobody 身分進入，可讀寫 /share",
                "value": "A"
            },
            {
                "label": "mtc 主機可掛載 /share 目錄，不能用 nobody 或 nfsnobody 身分進入，但可讀寫 /share ",
                "value": "B"
            },
            {
                "label": "mtc 主機可掛載 /share 目錄，若登入被視為 nobody 或 nfsnobody，可讀寫 /share", 
                "value": "C"
            },
            {
                "label": "mtc 主機可掛載 /share 目錄，會以原本的身分進入，可讀寫 /share",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-28",
        "question": "在 NFS Server 192.168.1.3 裡的分享控制檔，有一列設定為 /share *(rw)，請問下列哪一項可讓 NFS Client 端把分享目錄掛載到自己的檔案系統？",
        "options": [
            {
                "label": "mount share@192.168.1.3",
                "value": "A"
            },
            {
                "label": "mount 192.168.1.3:/share /mnt/share", 
                "value": "B"
            },
            {
                "label": "mount -t vfat 192.168.1.3:/share",
                "value": "C"
            },
            {
                "label": "mount /mnt/share  192.168.1.3:/share",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-29",
        "question": "在 Samba 的各種安全等級中，下列哪一種不需要檢驗帳號密碼？",
        "options": [
            {
                "label": "share",
                "value": "A"
            },
            {
                "label": "user", 
                "value": "B"
            },
            {
                "label": "server",
                "value": "C"
            },
            {
                "label": "domain",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-30",
        "question": "欲新增 Samba 的帳號為 ddd 並設定其密碼，下列哪一項正確？",
        "options": [
            {
                "label": "adduser ddd",
                "value": "A"
            },
            {
                "label": "smbpasswd ddd",
                "value": "B"
            },
            {
                "label": "passwd ddd", 
                "value": "C"
            },
            {
                "label": "smbpasswd -a ddd",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-31",
        "question": "如附圖所示，為 Samba 設定檔中設定使用者密碼部分參數，請問下列敘述哪一項錯誤？",
        "media": {
            "type": "table",
            "data": [
                ["security = user"],
                ["passdb backend = tdbsam"]
                
            ]
        },
        "options": [
            {
                "label": "security 設定為 user 層級",
                "value": "A"
            },
            {
                "label": "密碼採 tdbsam 資料庫格式存放",
                "value": "B"
            },
            {
                "label": "密碼檔會放置於 /var/lib/samba/private/ 內", 
                "value": "C"
            },
            {
                "label": "預設密碼使用非加密方式記錄",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "3-32",
        "question": "如附圖所示，其設定檔案內容告訴 Samba Daemon 下列哪一項訊息？",
        "media": {
            "type": "table",
            "data": [
                ["[home]"],
                ["path     = /home"],
                ["guest ok = yes"],
                ["writable = yes"]
            ]
        },
        "options": [
            {
                "label": "Samba 軟體是位在 /home 這個目錄下",
                "value": "A"
            },
            {
                "label": "一個共享設定叫做 home 放在 /home 這個目錄下，只能被授權的使用者寫入",
                "value": "B"
            },
            {
                "label": "一個共享設定叫做 home 放在 /home 這個目錄下，可以被任何使用者寫入",
                "value": "C"
            },
            {
                "label": "一個共享設定叫做 home 放在 /home 這個目錄下，可以到 /home 這個目錄下 miunt 它",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-33",
        "question": "如附圖所示，為 /etc/dhcp/dhcpd.conf 的設定，請問下列哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                [
                    ["subnet 192.168.1.0 netmask 255.255.255.192 {"],
                    ["    option router                     192.168.1.1;"],
                    ["    option subnet-mask                255.255.255.192;"],
                    ["    option domain-name                \"demosite.com\";"],
                    ["    option domain-name-servers        192.168.1.3, 192.168.1.4;"],
                    ["    range dynamic-bootp               192.168.1.11, 192.168.1.50;"],
                    ["    default-lease-time 21600;"],
                    ["    max-lease-time 43200;"],
                    ["}"]
                ]
            ]
        },
        "options": [
            {
                "label": "配發 IP 租約時指定的預設路由為 192.168.1.1",
                "value": "A"
            },
            {
                "label": "配發 IP 租約時指定的 DNS Server 為 demosite.com",
                "value": "B" 
            },
            {
                "label": "Client 取得的 IP 租約最長時間為 6 小時",
                "value": "C"
            },
            {
                "label": "最多可容許 40 個 DHCP Client 端同時上線",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "3-34",
        "question": "如附圖所示，為 /etc/dhcp/dhcpd.conf 設定檔的內容，請問 DHCP Server 分配的 Inter 連線閘道為下列哪一選項？",
        "media": {
            "type": "table",
            "data": [
                [["option routers                    192.168.10.254;"]],
                [["option subnet-mask                255.255.255.0;"]],
                [["option domain-name                \"xxx.com.tw\";"]],
                [["option domain-name-servers        168.95.1.1;"]],
                [["option ntp-servers                192.168.10.3;"]],
                [["option netbios-name-servers       192.168.1.1;"]]
            ]
        },
        "options": [
            {
                "label": "option domain-name",
                "value": "A"
            },
            {
                "label": "option ntp-servers",
                "value": "B"
            },
            {
                "label": "option routers",
                "value": "C"
            },
            {
                "label": "option netbios-name-servers",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-35",
        "question": "如附圖所示，為 /etc/dhcp/dhcpd.conf 設定檔的內容，請問下列哪一項錯誤？",
        "media": {
            "type": "table",
            "data": [
                [
                    ["subnet 192.168.10.0 netmask 255.255.255.0 {"],
                    ["    range 192.168.10.20    192.168.10.100;"],
                    ["    range 192.168.10.150   192.168.10.200;"],
                    ["}"]
                ]
            ]
        },
        "options": [
            {
                "label": "分配 IP 位址為 20-100, 150-200",
                "value": "A"
            },
            {
                "label": "不分配的位址為 1-19, 101-149, 201-254", 
                "value": "B"
            },
            {
                "label": "網路的閘道器為 192.168.10.0",
                "value": "C"
            },
            {
                "label": "子網路遮罩為 255.255.255.0",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-36",
        "question": "下列哪一項可以檢查 smb.conf 語法的正確性？",
        "options": [
            {
                "label": "testparm",
                "value": "A"
            },
            {
                "label": "checksmbconf", 
                "value": "B"
            },
            {
                "label": "smb-chech",
                "value": "C"
            },
            {
                "label": "chechparm",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "3-37",
        "question": "DHCP 用戶端使用下列哪一個連接埠向 DHCP 伺服器要求資訊？",
        "options": [
            {
                "label": "69",
                "value": "A"
            },
            {
                "label": "68", 
                "value": "B"
            },
            {
                "label": "67",
                "value": "C" 
            },
            {
                "label": "任何一個大於 1023 的連接埠",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "3-38",
        "question": "DHCP 伺服器使用下列哪一個連接埠，回覆 DHCP 用戶端所要求的資訊？",
        "options": [
            {
                "label": "69",
                "value": "A"
            },
            {
                "label": "68", 
                "value": "B"
            },
            {
                "label": "67",
                "value": "C" 
            },
            {
                "label": "任何一個大於 1023 的連接埠",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-39",
        "question": "如果 NFS 伺服器分享了某些目錄給任何人使用，請問下列哪一項敘述正確？",
        "options": [
            {
                "label": "只有微軟的作業系統也可以使用其分享",
                "value": "A"
            },
            {
                "label": "用戶端系統預設而言，只有 UNIX 的作業系統可以使用其分享",
                "value": "B"
            },
            {
                "label": "不管微軟或是 UNIX 的作業系統均可使用其分享",
                "value": "C"
            },
            {
                "label": "只有 VMS 可使用其分享",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "3-40",
        "question": "重要等級低且需較快速的傳輸，以及對效能影響較低的前提下，NFS 可使用下列 OSI 第四層通訊協定中的哪一項？",
        "options": [
            {
                "label": "UDP",
                "value": "A"
            },
            {
                "label": "TCP", 
                "value": "B"
            },
            {
                "label": "ICMP",
                "value": "C"
            },
            {
                "label": "IP",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-01",
        "question": "下列哪些為 DNS「正解」的使用？（複選）",
        "options": [
            {
                "label": "使用瀏覽器時輸入 www.redhat.com 即可連線 Redhat 瀏覽網站",
                "value": "A"
            },
            {
                "label": "nslookup 203.66.88.89（查出網域名為 www.hinet.net）", 
                "value": "B"
            },
            {
                "label": "host www.apache.org（查出 IP 為 209.237.227.195）",
                "value": "C"
            },
            {
                "label": "dig -x 209.246.26.22（查出網域名稱 www.sendmail.org）",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "4-02",
        "question": "下列哪些為 DNS「反解」的使用？（複選）",
        "options": [
            {
                "label": "使用瀏覽器時輸入 209.132.177.50 即可連線 Redhat 瀏覽網站",
                "value": "A"
            },
            {
                "label": "nslookup 203.66.88.89（查出網域名為 www.hinet.net）", 
                "value": "B"
            },
            {
                "label": "host www.apache.org（查出 IP 為209.237.227.195）",
                "value": "C"
            },
            {
                "label": "dig -x 209.246.26.22（查出網域名稱 www.sendmail.org）",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "4-03",
        "question": "下列哪些指令可以用來查詢 DNS 正/反解？（複選）",
        "options": [
            {
                "label": "nslookup",
                "value": "A"
            },
            {
                "label": "host",
                "value": "B" 
            },
            {
                "label": "resolv", 
                "value": "C"
            },
            {
                "label": "dig",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "4-04",
        "question": "DNS 正解檔案中，DNS Server 本身要設定下列哪些記錄，DNS Server 方可正常運作？（複選）",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "A",
                "value": "C"
            },
            {
                "label": "CNAME",
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "4-05",
        "question": "DNS 正解檔案中，欲提供某部 Apache Server 的名稱解析要設定下列哪一項記錄，網域名稱方可正常？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "A",
                "value": "C"
            },
            {
                "label": "SOA",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-06",
        "question": "設定 DNS Server 啟動時發生錯誤，請問下列哪一個 log 檔會記錄錯誤原因？",
        "options": [
            {
                "label": "/var/log/messages",
                "value": "A"
            },
            {
                "label": "/var/log/maillog", 
                "value": "B"
            },
            {
                "label": "/var/log/secure",
                "value": "C"
            },
            {
                "label": "/var/log/rpmpkgs",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-07",
        "question": "請問 IP 反解 NAME 使用的記錄為下列哪一項？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "NX", 
                "value": "B"
            },
            {
                "label": "PTR",
                "value": "C"
            },
            {
                "label": "CNAME",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-08",
        "question": "下列哪一項是每個 DNS 正/反解檔中只能有一個的記錄？",
        "options": [
            {
                "label": "PTR",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "CNAME",
                "value": "C"
            },
            {
                "label": "SOA",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-09",
        "question": "DNS Server 中的 SOA 記錄其作用為下列哪一項？",
        "options": [
                {
                    "label": "記錄名稱伺服器的管轄區域",
                    "value": "A"
                },
                {
                    "label": "指定為名稱伺服器",
                    "value": "B"
                },
                {
                    "label": "指定為郵件伺服器", 
                    "value": "C"
                },
                {
                    "label": "指定為別名",
                    "value": "D"
                }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-10",
        "question": "BIND 的 Daemon 為下列哪一項？",
        "options": [
            {
                "label": "bind",
                "value": "A"
            },
            {
                "label": "xinetd", 
                "value": "B"
            },
            {
                "label": "named",
                "value": "C"
            },
            {
                "label": "dnsd",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-11",
        "question": "可使用下列哪一個指令來測試 DNS 伺服器？",
        "options": [
            {
                "label": "dns",
                "value": "A"
            },
            {
                "label": "bind", 
                "value": "B"
            },
            {
                "label": "ping",
                "value": "C"
            },
            {
                "label": "nslookup",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-12",
        "question": "下列哪一個設定檔事 bind 的工作環境設定檔？",
        "options": [
            {
                "label": "named.local",
                "value": "A"
            },
            {
                "label": "named.ca", 
                "value": "B"
            },
            {
                "label": "localhost.zone",
                "value": "C"
            },
            {
                "label": "named.conf",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-13",
        "question": "當使用者提出名稱解析要求（DNS）時，是依照下列哪一個檔案所列的名稱伺服器順序來詢求服務？",
        "options": [
                {
                    "label": "/etc/named.conf",
                    "value": "A"
                },
                {
                    "label": "/etc/resolv.conf", 
                    "value": "B"
                },
                {
                    "label": "/etc/host.conf",
                    "value": "C" 
                },
                {
                    "label": "/etc/nsswitch.conf",
                    "value": "D"
                }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-14",
        "question": "一般而言，下列哪一個設定檔是 bind 的根網域記錄檔？",
        "options": [
                {
                    "label": "named.local",
                    "value": "A"
                },
                {
                    "label": "named.ca",
                    "value": "B" 
                },
                {
                    "label": "localhost.zone",
                    "value": "C"
                },
                {
                    "label": "named.conf",
                    "value": "D"
                }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-15",
        "question": "下列哪一項資源記錄的設定，可讓同一個IP 擁有許多不同的主機名稱？",
        "options": [
            {
                "label": "MX",
                "value": "A"
            },
            {
                "label": "A",
                "value": "B"
            }, 
            {
                "label": "CNAME", 
                "value": "C"
            },
            {
                "label": "NS",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-16",
        "question": "主機使用 DHCP 取得 IP 相關資訊包括 DNS 伺服器 IP，若想變更 DNS 設定 為 HINET DNS 伺服器除了更改 /etc/resolv.conf 外，為避免 /etc/resolv.conf 內容被自動變更，還需要在下列哪一個設定檔中加入 PEERDNS = no 參數？",
        "options": [
            {
                "label": "/etc/sysctl.conf",
                "value": "A"
            },
            {
                "label": "/etc/sysconfig/network-scripts/ifcfg-p3p1",
                "value": "B" 
            },
            {
                "label": "/etc/resolv.conf",
                "value": "C"
            },
            {
                "label": "/etc/sysconfig/network",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-17",
        "question": "Whois 指令可以協助管理者查詢到當初註冊 DNS 網域名稱時所填寫的使用者相關資訊，請問使用 whois 時，whois 後面需填入下列哪一種資訊方能查詢相關資訊？",
        "options": [
            {
                "label": "查詢的 IP Address",
                "value": "A"
            },
            {
                "label": "DNS 網域名稱伺服器", 
                "value": "B"
            },
            {
                "label": "查詢的主機名稱",
                "value": "C"
            },
            {
                "label": "查詢的網域名稱",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-18",
        "question": "提供 DNS 服務的伺服器軟體為下列哪一項？",
        "options": [
            {
                "label": "Apache",
                "value": "A"
            },
            {
                "label": "Samba", 
                "value": "B"
            },
            {
                "label": "BIND",
                "value": "C"
            },
            {
                "label": "IIS",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-19",
        "question": "為了系統安全考量我們可以架設一台 DNS 系統，本身並不直接做名稱解析服務，而是當 client 端有 DNS 解析需求時由它代為查詢及回覆，我們稱這種名稱解析服務為下列哪一項？",
        "options": [
            {
                "label": "Master DNS",
                "value": "A"
            },
            {
                "label": "Slave DNS", 
                "value": "B"
            },
            {
                "label": "cache-only DNS",
                "value": "C"
            },
            {
                "label": "forwarding DNS",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-20",
        "question": "DNS 系統會同時啟用 UDP/TCP 的 port 53 及 TCP 的 port 953，請問 port 953 的功能是下列哪一項？",
        "options": [
            {
                "label": "Master 與 Slave DNS 同步資料使用",
                "value": "A"
            },
            {
                "label": "作為 port 53 備援使用", 
                "value": "B"
            },
            {
                "label": "提供 client 端名稱反譯解析使用",
                "value": "C"
            },
            {
                "label": "提供遠端 BIND 服務控制及狀態查詢功能",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-21",
        "question": "在 SOA 記錄裡，用來讓附屬 DNS 知道多久的時間必須到主要 DNS 更新資料為下列哪一項？",
        "options": [
            {
                "label": "serial time",
                "value": "A"
            },
            {
                "label": "refresh time", 
                "value": "B"
            },
            {
                "label": "retry time",
                "value": "C"
            },
            {
                "label": "expire time",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-22",
        "question": "如附圖所示，下列哪一項是 DNS 查詢流程的正確順序？",
        "media": {
            "type": "table",
            "data": [
                [ 
                    ["I.    依照 /etc/resolv.conf 設定檔中的紀錄，向指定的名稱伺服器查詢。"],    
                    ["II.   查詢本機的 /etc/hosts 設定檔。"], 
                    ["III.  由名稱伺服器代為向其他上層網域的名稱伺服器查詢。"],
                    ["IV.   向次要名稱伺服器查詢。"]
                ]
            ]
        },
        "options": [
            {
                "label": "I, II, III, IV",
                "value": "A"
            },
            {
                "label": "I, III, II, IV", 
                "value": "B"
            },
            {
                "label": "II, III, I, IV",
                "value": "C"
            },
            {
                "label": "II, I, III, IV",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-23",
        "question": "下列哪一項是資源記錄中用來指定 IP 的記錄？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX",
                "value": "B"
            },
            {
                "label": "CNAME", 
                "value": "C"
            },
            {
                "label": "A",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-24",
        "question": "下列哪一項是資源記錄中用來指定網域名稱伺服器的記錄？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX",
                "value": "B"
            },
            {
                "label": "CNAME", 
                "value": "C"
            },
            {
                "label": "A",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-25",
        "question": "在 DNS 的主要組態檔 /etc/named.conf 裡的參數中，下列哪一項用來指定 zone file 的目錄位置？",
        "options": [
            {
                "label": "directory",
                "value": "A"
            },
            {
                "label": "location",
                "value": "B"
            },
            {
                "label": "catalog",
                "value": "C"
            },
            {
                "label": "zone", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-26",
        "question": "下列哪一項正確的描述正解區域檔的功能？",
        "options": [
            {
                "label": "將 IP 位址對應到主機名稱",
                "value": "A"
            },
            {
                "label": "將 IP 位址對應到 NetBIOS 的主機名稱", 
                "value": "B"
            },
            {
                "label": "將主機名稱對應到 IP 位址",
                "value": "C"
            },
            {
                "label": "將 NetBIOS 的主機名稱對應到 IP 位址",
                "value": "D" 
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-27",
        "question": "下列哪一項正確的描述反解區域檔的功能？",
        "options": [
            {
                "label": "將 IP 位址對應到主機名稱",
                "value": "A"
            },
            {
                "label": "將 IP 位址對應到 NetBIOS 的主機名稱",
                "value": "B"
            },
            {
                "label": "將主機名稱對應到 IP 位址", 
                "value": "C"
            },
            {
                "label": "將 NetBIOS 的主機名稱對應到 IP 位址",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-28",
        "question": "下列哪些為合法的反解區域？（複選）",
        "options": [
            {
                "label": "zone \"0.0.127.in-addr.arpa\"",
                "value": "A"
            },
            {
                "label": "zone \"1.168.192.in.addr.arpa\"",
                "value": "B"
            },
            {
                "label": "zone \"0.0.127\"", 
                "value": "C"
            },
            {
                "label": "zone \"1.168.192\"",
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "4-29",
        "question": "我國 com.tw 網域名稱之類別及申請資格為下列哪一項？",
        "options": [
            {
                "label": "依公司法登記之公司或依商業登記法登記之商號",
                "value": "A"
            },
            {
                "label": "依法設立之政府機關",
                "value": "B"
            },
            {
                "label": "依法登記之財團法人或社團法人", 
                "value": "C"
            },
            {
                "label": "個人（具中華民國國籍之國民）",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-30",
        "question": "我國 idv.tw 網域名稱之類別及申請資格為下列哪一項？",
        "options": [
            {
                "label": "依公司法登記之公司或依商業登記法登記之商號",
                "value": "A"
            },
            {
                "label": "依法設立之政府機關",
                "value": "B"
            },
            {
                "label": "依法登記之財團法人或社團法人", 
                "value": "C"
            },
            {
                "label": "個人（具中華民國國籍之國民）",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-31",
        "question": "如附圖所示，為某台主機的 /etc/named.conf 檔案片段，請問下列敘述哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                [
                    ["zone \"sec.com.tw\" IN {"],
                    ["    type slave;"],
                    ["    file \"slave.sec.com.tw\";"], 
                    ["    Smaster {203.74.205.135};"],
                    ["};"]
                ]
            ]
        },
        "options": [
            {
                "label": "該台主機是次要 DNS 伺服器",
                "value": "A"
            },
            {
                "label": "要讓此台伺服器正常運作，還要手動設定其他相關設定檔（本機正解記錄檔、本機反解記錄檔及根網域記錄檔）",  
                "value": "B"
            },
            {
                "label": "啟動 DNS 網路服務後，會依 file 的設定自動產生本機反解記錄檔",
                "value": "C"
            },
            {
                "label": "主要 DNS 伺服器的 IP 為 203.74.205.135",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "4-32",
        "question": "如附圖所示，為 DNS 的正解檔案內容，請問下列敘述哪一項錯誤？",
        "media": {
            "type": "table",
            "data": [
                [
                    ["@    IN SOA    xxx.com.tw.        root.xxx.com.tw. ("],
                    ["                   4 ; serial"],
                    ["                   28800 ; refresh"], 
                    ["                   14400 ; retry "],
                    ["                   3600000 ; expire"],
                    ["                   86400 ; ttl"],
                    ["                         )"]
                ]
            ]
        },
        "options": [
            {
                "label": "括號( )中內容是 Master DNS 與 Slave DNS 溝通的資訊",
                "value": "A"
            },
            {
                "label": "serial 為 Slave DNS 更新時，會比對 serial 號碼決定是否更新", 
                "value": "B"
            },
            {
                "label": "Master DNS 的 serial 號碼小於 Slave DNS 的 serial 才更新",
                "value": "C"
            },
            {
                "label": "retry 為當 Master DNS 不正常時，Slave DNS 重試時間",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-33",
        "question": "如附圖所示，為 DNS 主設定檔 named.conf 的內容，請問下列敘述哪一項錯誤？",
        "media": {
            "type": "table",
            "data": [
                [
                    ["zone \".\" IN {"],
                    ["    type hint;"],
                    ["    file \"named.ca\";"], 
                    ["};"]
                ]
            ]
        },
        "options": [
            {
                "label": "zone \".\" 代表 DNS 最頂層的主機",
                "value": "A"
            },
            {
                "label": "file \"named.ca\"; 此檔登記 DNS 頂層主機",
                "value": "B"
            },
            {
                "label": "named.ca 檔需置於 /etc/named.ca",
                "value": "C"
            },
            {
                "label": "DNS Server 會透過此檔，向 Internet DNS 頂層主機做正反解",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-34",
        "question": "在 DNS 中，下列哪一個郵件交換記錄參數的優先順序比較高？",
        "options": [
            {
                "label": "10",
                "value": "A"
            },
            {
                "label": "20", 
                "value": "B"
            },
            {
                "label": "100",
                "value": "C"
            },
            {
                "label": "200",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-35",
        "question": "下列哪一種記錄是 DNS 用來對應主機名稱到 IP 位址？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "A",
                "value": "C"
            }, 
            {
                "label": "PTR",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-36",
        "question": "下列哪一種記錄是 DNS 裡用來對應 IP 位址到主機名稱？",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "A",
                "value": "C"
            }, 
            {
                "label": "PTR",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-37",
        "question": "關於 DNS 架構的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "DNS 是一分散式的資料庫，採階層式樹狀目錄架構，並形成一網域名稱空間",
                "value": "A"
            },
            {
                "label": "DNS 的最上層是 Top Level Domain 網域", 
                "value": "B"
            },
            {
                "label": "arpa 網域是反解空間的上層",
                "value": "C"
            }, 
            {
                "label": "網域名稱空間中，FQDN 是指完整網域名稱，由名稱主機、網域及用\".\"結尾組合而成",
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "4-38",
        "question": "關於 DNS 查詢的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "查詢中包含有要查詢的 DNS Server 對象",
                "value": "A"
            },
            {
                "label": "查詢中包含有要查詢的類型，如 A、MX、NS 等", 
                "value": "B"
            },
            {
                "label": "查詢中包含有根網域的 IP",
                "value": "C"
            }, 
            {
                "label": "查詢中包含有要查詢的完整網域名稱或 IP",
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "4-39",
        "question": "下列哪一項是名稱解析伺服器有 mater 及 slave 兩種的原因？",
        "options": [
            {
                "label": "兩者必須並存，如果有一個不存在的話，名稱解析及無法運作",
                "value": "A"
            },
            {
                "label": "為了備份的原因",
                "value": "B" 
            },
            {
                "label": "為了負載平衡的原因",
                "value": "C"
            },
            {
                "label": "因為 master 需要 slave 來確認其資料是否正確",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "4-40",
        "question": "如附圖所示，為 namd.conf 的 slave 設定，請問甲、乙、丙、丁的設定哪一項正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-40.png\" alt=\"題目 4-40 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "甲",
                "value": "A"
            },
            {
                "label": "乙",
                "value": "B"
            },
            {
                "label": "丙",
                "value": "C"
            },
            {
                "label": "丁", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-41",
        "question": "如附圖所示，為依名稱解析的檔案內容，關於 MX 的 Resource Record 敘述，下列哪一項正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-41.png\" alt=\"題目 4-41 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "當 mail.linux.bogus. 正常運作時，mail.friend.bogus 就不會用到",
                "value": "A"
            },
            {
                "label": "兩個郵件伺服器會被 named 負載平衡",
                "value": "B"
            },
            {
                "label": "兩個郵件伺服器會被 named 負載平衡，但 mail.linux.bogus 被用 10 次之後，再輪到 mail.friend.bogus 被用 20 次並依此循環",
                "value": "C"
            },
            {
                "label": "兩個郵件伺服器會被 named 負載平衡，但 mail.linux.bogus 被用 1 次之後，再輪到 mail.friend.bogus 被用 2 次並依此循環",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-42",
        "question": "如附圖所示，為依名稱解析的檔案內容，關於 @ 的敘述，下列哪一項正確？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-42.png\" alt=\"題目 4-42 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "表示 linux.bogus 這個網域",
                "value": "A"
            },
            {
                "label": "沒意義",
                "value": "B"
            },
            {
                "label": "表示此行中有管理員的電子郵件",
                "value": "C"
            },
            {
                "label": "表示以下為 delegation 的資料",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "4-43",
        "question": "如附圖所示，為依名稱解析的檔案內容，其中「8H」的領域作用為下列哪一項？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-43.png\" alt=\"題目 4-43 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "TTL 的時間",
                "value": "A"
            },
            {
                "label": "slave 伺服器一旦連接 master 伺服器失敗，重新連線直到不再連線的時間",
                "value": "B" 
            },
            {
                "label": "slave 伺服器一旦連接 master 伺服器失敗，重新連線的週期",
                "value": "C"
            },
            {
                "label": "slave 伺服器來檢查 master 伺服器是否有更新的週期",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "4-44",
        "question": "下列哪一個 named 的選項可以設定 named 的程序擁有者？",
        "options": [
            {
                "label": "-U",
                "value": "A"
            },
            {
                "label": "-l",
                "value": "B" 
            },
            {
                "label": "-u",
                "value": "C"
            },
            {
                "label": "-L",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "4-45",
        "question": "附圖所示，為依名稱解析的檔案內容，其中「1D」的領域作用為下列哪一項？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/4-45.png\" alt=\"題目 4-45 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "TTL 的時間",
                "value": "A"
            },
            {
                "label": "slave 伺服器一旦連接 master 伺服器失敗，重新連線直到不再連線的時間",
                "value": "B" 
            },
            {
                "label": "slave 伺服器一旦連接 master 伺服器失敗，重新連線的週期",
                "value": "C"
            },
            {
                "label": "slave 伺服器來檢查 master 伺服器是否有更新的週期",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-01",
        "question": "設定郵件伺服器的別名，如要從檔案 /var/mail/pilot.aliases 讀入用戶的別名列表的話，應在 /etc/aliases 檔作下列哪一種記述？",
        "options": [
            {
                "label": "csf: /var/mail/pilot.aliases",
                "value": "A"
            },
            {
                "label": "csf: /CF/var/mail/pilot.aliases",
                "value": "B" 
            },
            {
                "label": "csf: :include:/var/mail/pilot.aliases",
                "value": "C"
            },
            {
                "label": "csf: DX/var/mail/pilot.aliases",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-02",
        "question": "有關 Sendmail 的描述，下列哪一項錯誤？",
        "options": [
            {
                "label": "當系統安裝完成，Sendmail 套件就安裝完成並已啟動 Sendmail 服務",
                "value": "A"
            },
            {
                "label": "預設安裝的 Sendmail，只有本機可以寄信",
                "value": "B"
            },
            {
                "label": "預設安裝的 Sendmail，可以提供系統寄信給 root 管理者",
                "value": "C"
            },
            {
                "label": "安裝好的 Sendmail 啟動的 port 埠號為 110",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-03",
        "question": "Sendmail Server 啟動時，使用到的主設定檔為下列哪一項？",
        "options": [
            {
                "label": "/etc/mail/sendmail.cf",
                "value": "A"
            },
            {
                "label": "/etc/mail/sendmail.mc", 
                "value": "B"
            },
            {
                "label": "/etc/mail/access",
                "value": "C"
            },
            {
                "label": "/etc/mail/submit.cf",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-04",
        "question": "SMTP 服務使用下列哪一個 TCP/IP 埠號？",
        "options": [
            {
                "label": "23",
                "value": "A"
            },
            {
                "label": "25", 
                "value": "B"
            },
            {
                "label": "110",
                "value": "C"
            },
            {
                "label": "53",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-05",
        "question": "當 Sendmail 伺服器架設完成，請問至 DNS 伺服器登記 Mail Server 必要的記錄有下列哪些？（複選）",
        "options": [
            {
                "label": "NS",
                "value": "A"
            },
            {
                "label": "MX", 
                "value": "B"
            },
            {
                "label": "A",
                "value": "C"
            },
            {
                "label": "CNAME",
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "5-06",
        "question": "當 Mail Relay 檔編輯完成時，執行 make 指令 Mail Relay 會寫入下列哪一個 db 檔？",
        "options": [
            {
                "label": "/etc/mail/domaintable.db",
                "value": "A"
            },
            {
                "label": "/etc/mail/mailertable.db", 
                "value": "B"
            },
            {
                "label": "/etc/mail/virtusertable.db",
                "value": "C"
            },
            {
                "label": "/etc/mail/access.db",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-07",
        "question": "編輯 Mail Relay 檔內容，下列哪一項正確？",
        "options": [
            {
                "label": "61.62.63  Relay",
                "value": "A"
            },
            {
                "label": "Relay  61.62.63",
                "value": "B"
            },
            {
                "label": "61.62.63  RELAY", 
                "value": "C"
            },
            {
                "label": "RELAY  61.62.63",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-08",
        "question": "下列哪些 Mail Relay 檔案的設定，可阻擋 badman@baddomain.com 的信件？（複選）",
        "options": [
            {
                "label": "badman@baddomain.com  DROP",
                "value": "A"
            },
            {
                "label": "badman@baddomain.com  DISCARD", 
                "value": "B"
            },
            {
                "label": "badman@baddomain.com  DENY",
                "value": "C"
            },
            {
                "label": "badman@baddomain.com  REJECT",
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "5-09",
        "question": "下列哪一項是 Main Server 存放所有 User 信件的位置？",
        "options": [
            {
                "label": "/bin/mail",
                "value": "A"
            },
            {
                "label": "/var/spool/mail", 
                "value": "B"
            },
            {
                "label": "/etc/mail",
                "value": "C"
            },
            {
                "label": "/var/mail",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-10",
        "question": "請問 IMAP 協定，使用下列哪一種埠號？",
        "options": [
            {
                "label": "25",
                "value": "A"
            },
            {
                "label": "53", 
                "value": "B"
            },
            {
                "label": "110",
                "value": "C"
            },
            {
                "label": "143",
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-11",
        "question": "有時會因為網路問題而使得郵件送不出去，而信件會被保存在郵件佇列當中。 試問查看信件佇列的指令為下列哪一項？",
        "options": [
            {
                "label": "newmail",
                "value": "A"
            },
            {
                "label": "mailqueue", 
                "value": "B"
            },
            {
                "label": "mailq",
                "value": "C"
            },
            {
                "label": "sendmail -q",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-12",
        "question": "關於電子郵件系統三個元件（MUA、MTA 及MDA）的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "微軟的 Outlook 屬於 MUA",
                "value": "A"
            },
            {
                "label": "MTA 是使用者用來讀取信件的軟體",
                "value": "B" 
            },
            {
                "label": "Sendmail 是屬於 MDA",
                "value": "C"
            },
            {
                "label": "MDA 可以比喻成將信件從郵局送到目的地的員工",
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "5-13",
        "question": "下列哪一種郵件服務，只管收集郵件但本身不負責散步到網路上？",
        "options": [
            {
                "label": "Sendmail",
                "value": "A"
            },
            {
                "label": "POP3", 
                "value": "B"
            },
            {
                "label": "Inetd",
                "value": "C"
            },
            {
                "label": "Qmail",
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-14",
        "question": "在 sendmail.mc 檔案中，下列哪一行指令必須在最前面？",
        "options": [
            {
                "label": "incude('../m4/cf.m4')",
                "value": "A"
            },
            {
                "label": "#sendmail", 
                "value": "B"
            },
            {
                "label": "#!/bin/sh",
                "value": "C"
            },
            {
                "label": "OSTYPE(linux)",
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-15",
        "question": "對於 /etc/mail/access 檔案的動作敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "OK 允許接收及寄送指定網址的信件", 
                "value": "A"
            },
            {
                "label": "RELAY 允許接收指定網址的使用者所寄來的信件", 
                "value": "B"
            },
            {
                "label": "REJECT 拒絕接收或寄送指定網址的信件", 
                "value": "C"
            },
            {
                "label": "DISCARD 丟棄從指定網址的使用者所寄來的信件，或寄送到此網址的信件，若有信件被丟棄，寄件者會收到錯誤訊息", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "5-16",
        "question": "關於帳號別名的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "別名設定檔為 /etc/mail/access", 
                "value": "A"
            },
            {
                "label": "一個使用者只能有一個別名", 
                "value": "B"
            },
            {
                "label": "一個別名可以包含多個使用者", 
                "value": "C"
            },
            {
                "label": "讓別名生效的方法是使用 newaliases 指令", 
                "value": "D"
            }
        ],
        "answer": ["C", "D"],
        "type": "multiple"
    },
    {
        "id": "5-17",
        "question": "在設定 Sendmail 伺服器時，用不到下列哪一個檔案？",
        "options": [
            {
                "label": "/etc/mail/access", 
                "value": "A"
            },
            {
                "label": "/etc/mail/local-host-names", 
                "value": "B"
            },
            {
                "label": "/etc/mail/sendmail.cf", 
                "value": "C"
            },
            {
                "label": "/etc/mail/hosts", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-18",
        "question": "Mail logs 位在下列哪一個目錄底下？",
        "options": [
            {
                "label": "/log", 
                "value": "A"
            },
            {
                "label": "/logs", 
                "value": "B"
            },
            {
                "label": "/var/adm/syslogs", 
                "value": "C"
            },
            {
                "label": "/var/log", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-19",
        "question": "郵件系統必須由下列哪些項目組成？（複選）",
        "options": [
            {
                "label": "MTA", 
                "value": "A"
            },
            {
                "label": "MUA", 
                "value": "B"
            },
            {
                "label": "MDA", 
                "value": "C"
            },
            {
                "label": "MBA", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "5-20",
        "question": "下列哪一項能正確的描述 MTA 的功能？",
        "options": [
            {
                "label": "存取儲存的郵件", 
                "value": "A"
            },
            {
                "label": "郵件加密", 
                "value": "B"
            },
            {
                "label": "傳送主機和主機之間的郵件", 
                "value": "C"
            },
            {
                "label": "解決郵件傳輸機制的問題", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-21",
        "question": "該網域的郵件會透過下列哪一種伺服器來決定傳送的路徑？",
        "options": [
            {
                "label": "DNS", 
                "value": "A"
            },
            {
                "label": "FTP", 
                "value": "B"
            },
            {
                "label": "HTTP", 
                "value": "C"
            },
            {
                "label": "Sendmail", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-22",
        "question": "Sendmail 帳戶的別名預設記錄在下列哪一個檔案？",
        "options": [
            {
                "label": "/etc/aliases", 
                "value": "A"
            },
            {
                "label": "/etc/mail/access", 
                "value": "B"
            },
            {
                "label": "/etc/passwd", 
                "value": "C"
            },
            {
                "label": "/var/spool/mail", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-23",
        "question": "在 /etc/aliases 預設 root 是下列哪些帳號的別名？（複選）",
        "options": [
            {
                "label": "bin", 
                "value": "A"
            },
            {
                "label": "Daemon", 
                "value": "B"
            },
            {
                "label": "mail", 
                "value": "C"
            },
            {
                "label": "ftp-adm", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "5-24",
        "question": "Mail 群組帳號的建立是在下列哪一個檔案？",
        "options": [
            {
                "label": "/etc/aliases", 
                "value": "A"
            },
            {
                "label": "/etc/passwd", 
                "value": "B"
            },
            {
                "label": "/etc/group", 
                "value": "C"
            },
            {
                "label": "/etc/shadow", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-25",
        "question": "下列哪一項為 Sendmail 的佇列？",
        "options": [
            {
                "label": "/var/spool/mqueue", 
                "value": "A"
            },
            {
                "label": "/var/spool/mail", 
                "value": "B"
            },
            {
                "label": "/var/spool/mailq", 
                "value": "C"
            },
            {
                "label": "/var/spool/sendmail", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "5-26",
        "question": "下列哪些資訊會在 Sendmail 佇列中呈現？（複選）",
        "options": [
            {
                "label": "收件者（Recipients）", 
                "value": "A"
            },
            {
                "label": "郵件大小（Message Size）", 
                "value": "B"
            },
            {
                "label": "到達時間（Arrival Time）", 
                "value": "C"
            },
            {
                "label": "送件者（Sender）", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "5-27",
        "question": "在 mail 指令的互動模式下寫信時，可使用下列哪一種方式結束？",
        "options": [
            {
                "label": "[Ctrl] + [C] 鍵", 
                "value": "A"
            },
            {
                "label": "[Ctrl] + [D] 鍵", 
                "value": "B"
            },
            {
                "label": "[Ctrl] + [Z] 鍵", 
                "value": "C"
            },
            {
                "label": "[.] 鍵", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-28",
        "question": "Sendmail 大量運用 m4 這個程式來編譯 Sendmail 的組態檔案，m4 的主要功能為下列哪一項？",
        "options": [
            {
                "label": "m4 是一個 shell", 
                "value": "A"
            },
            {
                "label": "m4 是一個 C Compiler", 
                "value": "B"
            },
            {
                "label": "m4 是一個 Macro Processor", 
                "value": "C"
            },
            {
                "label": "m4 是一個 Word Processor", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-29",
        "question": "欲把寄給 webadm 的信件轉給 admin 這個帳號，可在下列哪一個檔案中設定？",
        "options": [
            {
                "label": "/etc/mail/alias", 
                "value": "A"
            },
            {
                "label": "/var/mail/aliases", 
                "value": "B"
            },
            {
                "label": "/etc/aliases", 
                "value": "C"
            },
            {
                "label": "/var/lib/aliases", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-30",
        "question": "每一位郵件伺服器管理員除了要讓郵件伺服器正常運作之外，更要避免 Open Relay，請問下列哪一項是 Open Relay ？",
        "options": [
            {
                "label": "接收任何郵件", 
                "value": "A"
            },
            {
                "label": "未經授權的網域主機其信包均予以轉送", 
                "value": "B"
            },
            {
                "label": "開放查詢郵件", 
                "value": "C"
            },
            {
                "label": "開放查詢郵件帳號", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-31",
        "question": "/var/spool/clientmqueue 目錄做為 Sendmail 的 Client Mail 佇列，其擁有者為下列哪一項？",
        "options": [
            {
                "label": "mail:mail", 
                "value": "A"
            },
            {
                "label": "smmsp:smmsp", 
                "value": "B"
            },
            {
                "label": "smmsp:mail", 
                "value": "C"
            },
            {
                "label": "mail:smmsp", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-32",
        "question": "在 Sendmail 系統中，欲將寄給 admin 的信件轉給 webadm 這個帳號，在別名檔應使用下列哪一項設定？",
        "options": [
            {
                "label": "webadm : admin", 
                "value": "A"
            },
            {
                "label": "root : webadm", 
                "value": "B"
            },
            {
                "label": "admin : root", 
                "value": "C"
            },
            {
                "label": "admin : webadm", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-33",
        "question": "關於 Sendmail 系統中信件佇列的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Sendmail 將信件分為 header 及 body 二部分，分開存放在不同的檔案", 
                "value": "A"
            },
            {
                "label": "可以立即轉送出的信件會存放在 /var/spool/mqueue 目錄中", 
                "value": "B"
            },
            {
                "label": "儲存在佇列中的信件會在往後適當時機予以遞送", 
                "value": "C"
            },
            {
                "label": "mqueue 中的檔案，一般的使用者應該要有權限讀取，才能順利將信件送出", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "5-34",
        "question": "在安裝完成 Sendmail 之後，應使用下列哪一項方式啟動 Sendmail？",
        "options": [
            {
                "label": "sendmail -bt -qlh", 
                "value": "A"
            },
            {
                "label": "/usr/sbin/sendmain -bd -qlh", 
                "value": "B"
            },
            {
                "label": "sendmail start", 
                "value": "C"
            },
            {
                "label": "sendmal -qlh &", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-35",
        "question": "修改 Access 之後，應使用下列哪一項方式更新 Access.db？",
        "options": [
            {
                "label": "make update", 
                "value": "A"
            },
            {
                "label": "makemap text /etc/mail/access < /etc/mail/access", 
                "value": "B"
            },
            {
                "label": "makemap hash /etc/mail/access < /etc/mail/access", 
                "value": "C"
            },
            {
                "label": "makeupdate access", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "5-36",
        "question": "若 Sendmail 運作出現問題，應該查看下列哪些檔案以做為偵錯的主要線索來源？（複選）",
        "options": [
            {
                "label": "/var/log/message", 
                "value": "A"
            },
            {
                "label": "/var/log/maillog", 
                "value": "B"
            },
            {
                "label": "/var/log/dmesg", 
                "value": "C"
            },
            {
                "label": "/var/log/lastlog", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "5-37",
        "question": "若 Sendmail 是以單獨啟動（standalone）的方式運作，下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "/etc/hosts.allow 及 /etc/hosts.deny 可以限制 SMTP 的連線範圍", 
                "value": "A"
            },
            {
                "label": "使用 ipchains 或 iptables 可以限制 SMTP 的連線範圍", 
                "value": "B"
            },
            {
                "label": "必須在 /etc/inetd.conf 或 /etc/xinetd.conf 中設定 Sendmail", 
                "value": "C"
            },
            {
                "label": "SMTP 通常在 port 25 傾聽等待連線", 
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "5-38",
        "question": "關於 POP3 和 IMAP 協定的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "提供使用者離線取得信件", 
                "value": "A"
            },
            {
                "label": "使用 POP3 無法預視郵件主機中的信包有哪些信件主旨", 
                "value": "B"
            },
            {
                "label": "使用 IMAP 無法預視郵件主機中的信包有哪些信件主旨", 
                "value": "C"
            },
            {
                "label": "IMAP 的安全性高於 POP3", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "5-39",
        "question": "欲測試 Sendmail 的 rule set 替換，可執行下列哪一指令進入 rule-testing 模式？",
        "options": [
            {
                "label": "sendmail -bd", 
                "value": "A"
            },
            {
                "label": "sendmail -bp", 
                "value": "B"
            },
            {
                "label": "sendmail -bi", 
                "value": "C"
            },
            {
                "label": "sendmail -bt", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-40",
        "question": "如附圖所示，為郵件的錯誤訊息內容，請問圖中的訊息是下列哪一項原因所造成？",
        "media": {
            "type": "table",
            "data": [
                ["553 5.3.5 mail.tqc.org.tw config error: mail loops back to me (MX problem?)"],
                ["554 5.3.5 Local configuration error"]
            ]
        },
        "options": [
            {
                "label": "郵件地址寫錯", 
                "value": "A"
            },
            {
                "label": "Sendmail 程式啟動錯誤", 
                "value": "B"
            },
            {
                "label": "DNS Server 上沒有 MX 設定", 
                "value": "C"
            },
            {
                "label": "郵件伺服器主機名稱與 MX 名稱不符", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "5-41",
        "question": "如果你送了一封電子郵件到 foo.org 上的二十個帳號，請問 Sendmail 會以下列哪一項方式傳送到該電子郵件這二十個帳號？",
        "options": [
            {
                "label": "當帳號要收信，Sendmail 才會把此電子郵件複製到此帳號的信箱", 
                "value": "A"
            },
            {
                "label": "Sendmail 會馬上把此郵件放到各個帳號的信箱", 
                "value": "B"
            },
            {
                "label": "Sendmail 會把此郵件先放在一個公共信箱等各個帳號來收信", 
                "value": "C"
            },
            {
                "label": "Sendmail 會馬上把此郵件放到各個帳號的家目錄下", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "5-42",
        "question": "目前的垃圾郵件相當氾濫，原因之一是否些電子郵件伺服器過度開放 Relay 的功能，如果你是公司的 MIS 人員，請問該採取下列哪些方式解決過度開放 Relay 的問題？（複選）",
        "options": [
            {
                "label": "只開放給內部網路，所以只有當在此網路中才可使用 SMTP 寄信", 
                "value": "A"
            },
            {
                "label": "搭配使用SASL 讓寄信者必須通過認證後才能寄信", 
                "value": "B"
            },
            {
                "label": "只開放 Relay 功能給 127.0.0.1", 
                "value": "C"
            },
            {
                "label": "委派專人幫公司所有人寄信", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "5-43",
        "question": "關於 POP3 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "主要適用於離線模式", 
                "value": "A"
            },
            {
                "label": "不適用時多於一台電腦使用", 
                "value": "B"
            },
            {
                "label": "收信不需把信件全文下載至電腦", 
                "value": "C"
            },
            {
                "label": "可以於郵件伺服器上建立資料目錄並存郵件於伺服器上", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "5-44",
        "question": "關於 IMAP 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "主要適用於離線模式", 
                "value": "A"
            },
            {
                "label": "不適用時多於一台電腦使用", 
                "value": "B"
            },
            {
                "label": "收信不需把信件全文下載至電腦", 
                "value": "C"
            },
            {
                "label": "可以於郵件伺服器上建立資料目錄並存郵件於伺服器上", 
                "value": "D"
            }
        ],
        "answer": ["C", "D"],
        "type": "multiple"
    },
    {
        "id": "5-45",
        "question": "若想讓 Mail Server 主動的將以「網路購物」為主旨的廣告郵件「丟掉」， 可於 Sendmail 中加入分析郵件內容，以及使用者設定相對應狀態將郵件進一步過濾，請問下列哪一項程序可以做到？",
        "options": [
            {
                "label": "Cyrus SASL", 
                "value": "A"
            },
            {
                "label": "Mailing list", 
                "value": "B"
            },
            {
                "label": "Mail Relay", 
                "value": "C"
            },
            {
                "label": "Procmail", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "6-01",
        "question": "在 Apache 中，「Document Root」的意義為下列哪一項？",
        "options": [
            {
                "label": "指定了 HTML 樹狀結構的頂層目錄位置", 
                "value": "A"
            },
            {
                "label": "指定了設定檔案 httpd.conf 的放置場所", 
                "value": "B"
            },
            {
                "label": "指定了 Apache 文件檔案放置場所", 
                "value": "C"
            },
            {
                "label": "指定了 Apache 的 log 檔案放置場所", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-02",
        "question": "Apache Service 服務啟動後，會開啟下列哪一項埠號？",
        "options": [
            {
                "label": "25", 
                "value": "A"
            },
            {
                "label": "53", 
                "value": "B"
            },
            {
                "label": "80", 
                "value": "C"
            },
            {
                "label": "110", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-03",
        "question": "RPM 套件預設的「Document Root」網頁根目錄位置為下列哪一項？",
        "options": [
            {
                "label": "/etc/httpd/www", 
                "value": "A"
            },
            {
                "label": "/var/www/html", 
                "value": "B"
            },
            {
                "label": "/usr/local/www", 
                "value": "C"
            },
            {
                "label": "/usr/sbin/httpd", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-04",
        "question": "RPM 套件預設的設定檔「httpd.conf」目錄位置為下列哪一項？",
        "options": [
            {
                "label": "/etc/httpd/conf/httpd.conf", 
                "value": "A"
            },
            {
                "label": "/var/www/conf/httpd.conf", 
                "value": "B"
            },
            {
                "label": "/usr/local/apache/httpd/conf/httpd.conf", 
                "value": "C"
            },
            {
                "label": "/usr/sbin/conf/httpd.conf", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-05",
        "question": "Apache 啟動時出現「httpd: Could not reliably determine the server's fully qualified domain name, using localhost.localdomain. Set the 'ServerName' directive globally to suppress this message」訊息，請問下列敘述哪些正確？（複選）",
        "options": [
            {
                "label": "Apache 無法啟動", 
                "value": "A"
            },
            {
                "label": "Apache 已經啟動", 
                "value": "B"
            },
            {
                "label": "httpd.conf 設定檔中刪除 ServerName 此列，啟動時就不會顯示", 
                "value": "C"
            },
            {
                "label": "httpd.conf 設定檔中設定 ServerName 的名稱，啟動時就不會顯示", 
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "6-06",
        "question": "在 Windows 中製作網的網頁，放至 Apache 下中文出現亂碼，欲讓中文可正確顯示，需將 AddDefaultCharset 修改成下列哪一項？",
        "options": [
            {
                "label": "AddDefaultCharset UTF8", 
                "value": "A"
            },
            {
                "label": "Apache 已經啟動", 
                "value": "B"
            },
            {
                "label": "AddDefaultCharset cp950", 
                "value": "C"
            },
            {
                "label": "AddDefaultCharset Big5", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "6-07",
        "question": "當一般 User 瀏覽 Apache 網站，請問是用下列哪一種權限身分瀏覽？",
        "options": [
            {
                "label": "root", 
                "value": "A"
            },
            {
                "label": "guest", 
                "value": "B"
            },
            {
                "label": "apache", 
                "value": "C"
            },
            {
                "label": "supervisor", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-08",
        "question": "請問在 Apache 中，設定每個 User 家目錄中的個人網頁，其預設名稱為下列哪一項？",
        "options": [
            {
                "label": "public_html", 
                "value": "A"
            },
            {
                "label": "http_html", 
                "value": "B"
            },
            {
                "label": "public_http", 
                "value": "C"
            },
            {
                "label": "www_http", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-09",
        "question": "如 Apache 啟用 SSL 加密傳輸協定 https，請問 https 所使用的埠號為下列哪一項？",
        "options": [
            {
                "label": "22", 
                "value": "A"
            },
            {
                "label": "443", 
                "value": "B"
            },
            {
                "label": "80", 
                "value": "C"
            },
            {
                "label": "143", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-10",
        "question": "欲讓 VsFTP 停止匿名登入，可在設定檔 vsftpd.conf 設定下列哪一項？",
        "options": [
            {
                "label": "guest_enable = NO", 
                "value": "A"
            },
            {
                "label": "anonymous_enable = NO", 
                "value": "B"
            },
            {
                "label": "user_enable = NO", 
                "value": "C"
            },
            {
                "label": "local_enable = NO", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-11",
        "question": "VsFTP 設定檔內容 : Local_mat_rate = 5000，請問關於此列設定的敘述下列哪一項正確？",
        "options": [
            {
                "label": "限制匿名者的下載傳輸速率", 
                "value": "A"
            },
            {
                "label": "限制使用者的下載傳輸速率", 
                "value": "B"
            },
            {
                "label": "VsFTP 伺服器最大連線數", 
                "value": "C"
            },
            {
                "label": "閒置 5000 秒時自動斷線", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-12",
        "question": "VsFTP 設定檔內容 : idle_session_timeout = 600，請問關於此列的敘述下列哪一項正確？",
        "options": [
            {
                "label": "為最大的傳輸速率", 
                "value": "A"
            },
            {
                "label": "限制 vsftp 最大的連線數", 
                "value": "B"
            },
            {
                "label": "閒置 600 秒時自動斷線", 
                "value": "C"
            },
            {
                "label": "限制 IP 的連線數量", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-13",
        "question": "關於啟動 Apache Server 的敘述，下列哪一項正確？",
        "options": [
            {
                "label": "/etc/rc.d/init.d/xinetd start", 
                "value": "A"
            },
            {
                "label": "/etc/rc.d/init.d/apached start", 
                "value": "B"
            },
            {
                "label": "systemctl start httpd.service", 
                "value": "C"
            },
            {
                "label": "service apache start", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-14",
        "question": "關於 Apache Server 基本設定的敘述，下列哪些錯誤？（複選）",
        "options": [
            {
                "label": "DocumentRoot 是指定存放網頁說明文件的目錄", 
                "value": "A"
            },
            {
                "label": "ServerRoot 是指定存放網頁的根目錄", 
                "value": "B"
            },
            {
                "label": "UserDir 的預設值為 www", 
                "value": "C"
            },
            {
                "label": "Port 的預設值為 80", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "6-15",
        "question": "關於 AllowOverride 功能設定的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Options 具有允許使用 Options、XbitHack 設定控制指定之目錄的特性", 
                "value": "A"
            },
            {
                "label": "All 具有開放指定目錄的所有存取權限", 
                "value": "B"
            },
            {
                "label": "Limit 具有允許使用 Allow、Dent、Order 設定控制主機存取權限", 
                "value": "C"
            },
            {
                "label": "None 的指定目錄以預設存取權限為準", 
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"], 
        "type": "multiple"
    },
    {
        "id": "6-16",
        "question": "關於 FTP 指令的敘述，下列哪些錯誤？（複選）",
        "options": [
            {
                "label": "dir 指令可顯示現行目錄下的所有檔案", 
                "value": "A"
            },
            {
                "label": "get 指令可以下載多個檔案", 
                "value": "B"
            },
            {
                "label": "prompt 指令可以設定提示符號", 
                "value": "C"
            },
            {
                "label": "lcd 指令可以切換本機目前的目錄", 
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "6-17",
        "question": "下列哪些是 FTP 伺服器端的程式？（複選）",
        "options": [
            {
                "label": "VsFTPD", 
                "value": "A"
            },
            {
                "label": "NcFTP", 
                "value": "B"
            },
            {
                "label": "ProFTPD", 
                "value": "C"
            },
            {
                "label": "WsFTP", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "6-18",
        "question": "欲離開 FTP，可在 FTP 提示符號下執行下列哪些指令？（複選）",
        "options": [
            {
                "label": "closed", 
                "value": "A"
            },
            {
                "label": "out", 
                "value": "B"
            },
            {
                "label": "bye", 
                "value": "C"
            },
            {
                "label": "quit", 
                "value": "D"
            }
        ],
        "answer": ["C", "D"],
        "type": "multiple"
    },
    {
        "id": "6-19",
        "question": "VsFTP 伺服器將使用者分為下列哪些類別？（複選）",
        "options": [
            {
                "label": "real", 
                "value": "A"
            },
            {
                "label": "anonymous", 
                "value": "B"
            },
            {
                "label": "guest", 
                "value": "C"
            },
            {
                "label": "restricted", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "6-20",
        "question": "VsFTPD 預設允許擁有帳號的使用者任意切換到家目錄以外的目錄，若想限制某些特定使用者登入後只能在其家目錄下活動，下列哪些是必要的設定？（複選）",
        "options": [
            {
                "label": "在 /etc/vsftpd/vsftpd.conf 檔案中加入 \"chroot_local_user = YES\" 這行", 
                "value": "A"
            },
            {
                "label": "在 /etc/vsftpd/vsftpd.conf 檔案中加入 \"chroot_list_enable = YES\" 這行", 
                "value": "B"
            },
            {
                "label": "在 /etc/vsftpd 目錄下建立 chroot_list 檔案，並將那些特定使用者帳號加到檔案中", 
                "value": "C"
            },
            {
                "label": "將其他使用者家目錄的存取權限設為 700", 
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "6-21",
        "question": "下列哪一項是 Apache 伺服器的程式？",
        "options": [
            {
                "label": "apached", 
                "value": "A"
            },
            {
                "label": "httpd", 
                "value": "B"
            },
            {
                "label": "htmld", 
                "value": "C"
            },
            {
                "label": "ftpd", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-22",
        "question": "在 Apache 的組態檔中，下列哪一項指令是用來設定 html 文件首頁的位置？",
        "options": [
            {
                "label": "DocumentRoot", 
                "value": "A"
            },
            {
                "label": "ServerRoot", 
                "value": "B"
            },
            {
                "label": "DirectoryIndex", 
                "value": "C"
            },
            {
                "label": "AccessFileName", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-23",
        "question": "在 Apache 的組態檔中，下列哪一項指令使用來設定每一個目錄抓取的預設檔案名稱？",
        "options": [
            {
                "label": "DocumentRoot", 
                "value": "A"
            },
            {
                "label": "ServerRoot", 
                "value": "B"
            },
            {
                "label": "DirectoryIndex", 
                "value": "C"
            },
            {
                "label": "AccessFileName", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-24",
        "question": "執行 Apache 時，要讓指定的目錄有登入認證的功能，必須在該目錄加上下列哪一個檔案？",
        "options": [
            {
                "label": ".htaccess", 
                "value": "A"
            },
            {
                "label": ".htpasswd", 
                "value": "B"
            },
            {
                "label": "htaccess", 
                "value": "C"
            },
            {
                "label": "htpasswd", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-25",
        "question": "執行 Apache 目錄登入認證時，用來產生認證檔案（密碼）的指令為下列哪一項？",
        "options": [
            {
                "label": "htpasswd", 
                "value": "A"
            },
            {
                "label": "passwd", 
                "value": "B"
            },
            {
                "label": "crypt", 
                "value": "C"
            },
            {
                "label": "auth", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "6-26",
        "question": "在 Apache 的組態檔中，<VirtualHost UP 位址> 和 </VirtualHost> 之間可以使用下列哪些指令？（複選）",
        "options": [
            {
                "label": "ServerName", 
                "value": "A"
            },
            {
                "label": "DocumentRoot", 
                "value": "B"
            },
            {
                "label": "ErrorLog", 
                "value": "C"
            },
            {
                "label": "CustomerLog", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "6-27",
        "question": "name-based 和 IP-based 的虛擬主機二者的差異有下列哪些？（複選）",
        "options": [
            {
                "label": "named-based 的虛擬主機使用同一個 IP 位址", 
                "value": "A"
            },
            {
                "label": "named-based 的虛擬主機使用不同的 IP 位址", 
                "value": "B"
            },
            {
                "label": "IP-based 的虛擬主機使用同一個 IP 位址", 
                "value": "C"
            },
            {
                "label": "IP-based 的虛擬主機使用不同的 IP 位址", 
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "6-28",
        "question": "關於 FTP 功能的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "可以將檔案在 Client 和 Server 間傳輸", 
                "value": "A"
            },
            {
                "label": "可以提供上傳檔案的服務", 
                "value": "B"
            },
            {
                "label": "可以提供下載檔案的服務", 
                "value": "C"
            },
            {
                "label": "可以提供匿名者的服務", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "6-29",
        "question": "下載圖形檔案前，必須先在 FTP Client 下達的指令可以是下列哪些？（複選）",
        "options": [
            {
                "label": "binary", 
                "value": "A"
            },
            {
                "label": "ascii", 
                "value": "B"
            },
            {
                "label": "bin", 
                "value": "C"
            },
            {
                "label": "asc", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "6-30",
        "question": "下列哪一項是 VsFTP 的組態檔？",
        "options": [
            {
                "label": "/etc/vsftpd.ftpusers", 
                "value": "A"
            },
            {
                "label": "/etc/vsftpd.user_list", 
                "value": "B"
            },
            {
                "label": "/etc/vsftpd/vsftpd.conf", 
                "value": "C"
            },
            {
                "label": "/etc/vsftpd/config", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-31",
        "question": "欲檢查 Apache 設定檔的語法是否正確，可使下列哪些方法？（複選）",
        "options": [
            {
                "label": "apachectl checkconf", 
                "value": "A"
            },
            {
                "label": "apachectl check", 
                "value": "B"
            },
            {
                "label": "apachectl configtest", 
                "value": "C"
            },
            {
                "label": "apachectl -t", 
                "value": "D"
            }
        ],
        "answer": ["C", "D"],
        "type": "multiple"
    },
    {
        "id": "6-32",
        "question": "關於 Web Server Response codes 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Response codes 若為 100~199，表示 information", 
                "value": "A"
            },
            {
                "label": "Response codes 若為 200~299，表示 Server 端的 request 成功", 
                "value": "B"
            },
            {
                "label": "Response codes 若為 300~399，表示 Client 端的要求將被轉向做進一步的處理", 
                "value": "C"
            },
            {
                "label": "Response codes 若為 500~599，表示 Server 伺服器發生錯誤", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "6-33",
        "question": "位於 NAT 內部網路的 Client 端欲由 FTP Server 下載檔案時，通常會採用被動式的傳輸模式，下列哪些敘述正確？（複選）",
        "options": [
            {
                "label": "Client 會由 1024 以上的 port 隨機挑選一個，和 FTP Server port 21 連線", 
                "value": "A"
            },
            {
                "label": "Client 會由以 port 20 和 FTP Server 1024 以上的 port 連線", 
                "value": "B"
            },
            {
                "label": "傳輸檔案前，Server 端會隨機挑選 1024 以上的 port，然後等待 Client 端連線", 
                "value": "C"
            },
            {
                "label": "傳輸檔案前，Client 端會隨機挑選 1024 以上的 port，並告知 FTP Server 它已經準備好接收資料", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "6-34",
        "question": "如附圖所示，為 Apache 虛擬主機的設定，其中 www 和 vm 是同一部主機。請問下列敘述哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                [
                    ["NameVirtualHost 192.168.1.1"],
                    ["&lt;VirtualHost 192.168.1.3&gt;"],
                    ["    DocumentRoot /usr/local/apache2/htdocs"], 
                    ["    ServerName www.c.com"],
                    ["&lt;/VirtualHost&gt;"],
                    [""],
                    ["&lt;VirtualHost 192.168.1.3&gt;"],
                    ["    DocumentRoot /home/vhost/public_html"],
                    ["    ServerName vm.c.com"],
                    ["&lt;/VirtualHost&gt;"]
                ]
            ]
        },
        "options": [
            {
                "label": "上述方式是採用 Name-based 虛擬主機設定", 
                "value": "A"
            },
            {
                "label": "上述方式是採用 IP-based 虛擬主機設定", 
                "value": "B"
            },
            {
                "label": "使用 Name-based 虛擬主機設定者，Client 端瀏覽器只要有支援 HTTP 1.0", 
                "value": "C"
            },
            {
                "label": "Name-based 虛擬主機要搭配 DNS 設定（如CNAME）才能正常運作", 
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "6-35",
        "question": "如附圖所示，為瀏覽使用者 vincent 設定的 Apache 個人網頁所發生的錯誤訊息，請問是下列哪一項原因造成網頁無法瀏覽？",
        "media": {
            "type": "table",
            "data": [
                [["<map><img src=\"images/6-35.png\" alt=\"題目 6-35 圖片\"></map>"]]
            ]
        },
        "options": [
            {
                "label": "找不到 index.html 的網頁",
                "value": "A"
            },
            {
                "label": "httpd.conf 定義的設定檔有問題",
                "value": "B"
            },
            {
                "label": "瀏覽網頁的目錄權限不足",
                "value": "C"
            },
            {
                "label": "該 Apache Server 沒有啟動",
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-36",
        "question": "如果希望讓 Client 開啟網頁時，若找不到首頁檔案（預設為 index.html）系統就不會顯示出整個目錄下的檔案名稱，可在 httpd.conf 設定檔的 <Directory \"var/www/html\"> 設定取消下列哪一個 options 功能？",
        "options": [
            {
                "label": "FollowSymLinks", 
                "value": "A"
            },
            {
                "label": "Includes", 
                "value": "B"
            },
            {
                "label": "MultiViews", 
                "value": "C"
            },
            {
                "label": "Indexes", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "6-37",
        "question": "在負責 Apache 目錄登入認證的 .htaccess 參數中，下列哪一項是用來指定可以登入目錄的使用者？",
        "options": [
            {
                "label": "AuthName", 
                "value": "A"
            },
            {
                "label": "AuthType", 
                "value": "B"
            },
            {
                "label": "AuthUserFile", 
                "value": "C"
            },
            {
                "label": "reuqire", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "6-38",
        "question": "在 Apaches 已經設定了 http:// 的加密連線，請問應該在下列哪一項，設定加密連線所使用的 DocumentRoot \"/var/www/https\"？",
        "options": [
            {
                "label": "/etc/httpd/conf.d/pki.conf", 
                "value": "A"
            },
            {
                "label": "/etc/httpd/conf.d/ssl.conf", 
                "value": "B"
            },
            {
                "label": "/etc/httpd/conf.d/httpd.conf", 
                "value": "C"
            },
            {
                "label": "/etc/httpd/conf.d/httpsd.conf", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-39",
        "question": "由於安全考量需要限制系統部分使用者無法登入 VsFTP，請問如果採用 PAM 模組驗證的方式阻擋，下列敘述哪一項正確？",
        "options": [
            {
                "label": "/etc/vsftpd/ftpusers 移除無法登入的使用者帳號", 
                "value": "A"
            },
            {
                "label": "/etc/vsftpd/ftpusers 加入無法登入的使用者帳號", 
                "value": "B"
            },
            {
                "label": "/etc/bsftpd/user_list 移除無法登入的使用者帳號", 
                "value": "C"
            },
            {
                "label": "/etc/bsftpd/user_list 加入無法登入的使用者帳號", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-40",
        "question": "在 httpd.conf 中若有設定為「Include /usr/local/apache2/conf/conf.d」，請問其用意為下列哪一項？",
        "options": [
            {
                "label": "conf.d 中的檔案均視為模組", 
                "value": "A"
            },
            {
                "label": "conf.d 中的檔案均視為記錄檔", 
                "value": "B"
            },
            {
                "label": "conf.d 中的檔案均視為設定檔", 
                "value": "C"
            },
            {
                "label": "conf.d 中的檔案均視為執行檔", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-41",
        "question": "VsFTP 可以設定成以 inetd 或 standalone 模式運作，若欲採用 standalone 模式，則 vsftpd.conf 需要設定下列哪一項？",
        "options": [
            {
                "label": "standalone = YES", 
                "value": "A"
            },
            {
                "label": "listen = YES", 
                "value": "B"
            },
            {
                "label": "Daemon = NO", 
                "value": "C"
            },
            {
                "label": "listen_enable = YES", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "6-42",
        "question": "欲讓主機中的使用者帳號可以登入 VsFTP FTP Server，在 vsftpd.conf 中應使用下列哪一項設定？",
        "options": [
            {
                "label": "anonymous_enable = YES", 
                "value": "A"
            },
            {
                "label": "write_enable = YES", 
                "value": "B"
            },
            {
                "label": "local_enalbe = YES", 
                "value": "C"
            },
            {
                "label": "login_enable = YES", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "6-43",
        "question": "欲讓 VsFTP FTP Server 可供匿名登入，在 vsftpd.conf 中應使用下列哪一項設定？",
        "options": [
            {
                "label": "在 anonymous_enable = YES 選項前面加上 # 號", 
                "value": "A"
            },
            {
                "label": "local_enable = NO", 
                "value": "B"
            },
            {
                "label": "login_enabloe = NO", 
                "value": "C"
            },
            {
                "label": "anonymous_enable = YES", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "6-44",
        "question": "Client 端由 FTP Server 下載檔案時，通常會採用主動式的傳輸模式，下列哪些敘述正確？（複選）",
        "options": [
            {
                "label": "Client 會由 1024 以上的 port 隨機挑選一個，和 FTP Server port 21 連線", 
                "value": "A"
            },
            {
                "label": "Client 會由以 port 20 和 FTP Server 1024 以上的 port 連線", 
                "value": "B"
            },
            {
                "label": "傳輸檔案前，Client 端會開啟 port 20，並告知 FTP Server 它已經準備好接收資料", 
                "value": "C"
            },
            {
                "label": "傳輸檔案前，Client 端會隨機挑選 1024 以上的 port，然後由 Server port 20 主動傳輸資料給 Client 端", 
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "6-45",
        "question": "下列哪一項設定可讓 Apache 的預設字型為中文繁體？",
        "options": [
            {
                "label": "Language zh-TW", 
                "value": "A"
            },
            {
                "label": "AddDefaultCharset zh-TW", 
                "value": "B"
            },
            {
                "label": "SetLanguage zh-TW", 
                "value": "C"
            },
            {
                "label": "LanguagePriority zh-TW", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-01",
        "question": "下列哪些 Service 支援 TCP wrapper？（複選）",
        "options": [
            {
                "label": "Telnet Server", 
                "value": "A"
            },
            {
                "label": "vsftpd Server", 
                "value": "B"
            },
            {
                "label": "NFS Server", 
                "value": "C"
            },
            {
                "label": "Samba Server", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "7-02",
        "question": "當設定完成 hosts.allow 及 host.deny 這兩個檔案時，需使用下列哪一方式啟用 TCP wrapper？",
        "options": [
            {
                "label": "/etc/rc.d/init.d/xinetd restart", 
                "value": "A"
            },
            {
                "label": "依 hosts.allow 及 hosts.deny 內容去重新啟用相關服務", 
                "value": "B"
            },
            {
                "label": "只有 reboot 重新開機方可使用", 
                "value": "C"
            },
            {
                "label": "只要 hosts.allow 及 host.deny 存檔即可使用", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-03",
        "question": "關於 Proxy Server 的敘述，下列哪一項錯誤？",
        "options": [
            {
                "label": "架設 Proxy 可以減少網路瀏覽所佔的頻寬", 
                "value": "A"
            },
            {
                "label": "Proxy Server 亦稱為「代理伺服器」", 
                "value": "B"
            },
            {
                "label": "Linux 上的 Proxy 名為「ISA Server」", 
                "value": "C"
            },
            {
                "label": "Proxy Server 放至閘道器上亦有防火牆功能", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "7-04",
        "question": "關於 Proxy Server 的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Linux 上 Proxy 名為 squid", 
                "value": "A"
            },
            {
                "label": "Proxy 用戶端 TCP/IP 設定必須指定 Proxy Server IP 方可使用", 
                "value": "B"
            },
            {
                "label": "Proxy 用戶端只需指定瀏覽器上的 Proxy Server 即可使用", 
                "value": "C"
            },
            {
                "label": "Proxy Server 只能架設 Internet 配發的實體 IP 上方可使用", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "7-05",
        "question": "Squid 預設的埠號為下列哪一項？",
        "options": [
            {
                "label": "80", 
                "value": "A"
            },
            {
                "label": "3128", 
                "value": "B"
            },
            {
                "label": "8080", 
                "value": "C"
            },
            {
                "label": "443", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-06",
        "question": "Squid 預設的磁碟快取放置目錄為下列哪一項？",
        "options": [
            {
                "label": "/var/spool/squid", 
                "value": "A"
            },
            {
                "label": "/var/spool/proxy", 
                "value": "B"
            },
            {
                "label": "/etc/squid", 
                "value": "C"
            },
            {
                "label": "/var/lib/proxy", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-07",
        "question": "Squid 的設定檔位在下列哪一項位置？",
        "options": [
            {
                "label": "/var/proxy/squid.conf", 
                "value": "A"
            },
            {
                "label": "/var/spool/squid.conf", 
                "value": "B"
            },
            {
                "label": "/etc/squid/squid.conf", 
                "value": "C"
            },
            {
                "label": "/etc/proxy/squid.conf", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "7-08",
        "question": "Iptables 內定下列哪些為 Table？（複選）",
        "options": [
            {
                "label": "Filter", 
                "value": "A"
            },
            {
                "label": "INOUT", 
                "value": "B"
            },
            {
                "label": "NAT", 
                "value": "C"
            },
            {
                "label": "MANGLE", 
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "7-09",
        "question": "Iptables 中 Filter 包括下列哪些 Chain？（複選）",
        "options": [
            {
                "label": "INPUT", 
                "value": "A"
            },
            {
                "label": "OUTPUT", 
                "value": "B"
            },
            {
                "label": "NAT", 
                "value": "C"
            },
            {
                "label": "FORWARD", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "D"],
        "type": "multiple"
    },
    {
        "id": "7-10",
        "question": "Iptables 中 NAT 包括下列哪些 Chain？（複選）",
        "options": [
            {
                "label": "INPUT", 
                "value": "A"
            },
            {
                "label": "OUTPUT", 
                "value": "B"
            },
            {
                "label": "PREROUTING", 
                "value": "C"
            },
            {
                "label": "POSTROUTING", 
                "value": "D"
            }
        ],
        "answer": ["B", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "7-11",
        "question": "查看 Iptables 防火牆是否啟用，可使下列哪一項指令查看？",
        "options": [
            {
                "label": "iptables -L", 
                "value": "A"
            },
            {
                "label": "iptables -F", 
                "value": "B"
            },
            {
                "label": "iptables -D", 
                "value": "C"
            },
            {
                "label": "iptables -P", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-12",
        "question": "欲清除全部 Iptables 的 Rule，可使用下列哪一項指令？",
        "options": [
            {
                "label": "iptables -L", 
                "value": "A"
            },
            {
                "label": "iptables -F", 
                "value": "B"
            },
            {
                "label": "iptables -D", 
                "value": "C"
            },
            {
                "label": "iptables -P", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-13",
        "question": "下列哪一項不屬於 Iptables 防火牆封包處理方式？",
        "options": [
            {
                "label": "ACCEPT", 
                "value": "A"
            },
            {
                "label": "DROP", 
                "value": "B"
            },
            {
                "label": "REJECT", 
                "value": "C"
            },
            {
                "label": "DENY", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-14",
        "question": "Iptables -A NPUT -p (？)，括號中的內容為下列哪些封包類型？（複選）",
        "options": [
            {
                "label": "TCP", 
                "value": "A"
            },
            {
                "label": "UDP", 
                "value": "B"
            },
            {
                "label": "ICMP", 
                "value": "C"
            },
            {
                "label": "HTTP", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-15",
        "question": "當 TCP wrapper 在使用時，下列哪一個檔案是用來限制登入的主機？",
        "options": [
            {
                "label": "/etc/deny", 
                "value": "A"
            },
            {
                "label": "/etc/hosts.deny", 
                "value": "B"
            },
            {
                "label": "/etc/tcp.deny", 
                "value": "C"
            },
            {
                "label": "/etc/tcp_wrappers.deny", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-16",
        "question": "當 TCP Wrapper 在使用時，下列哪一個檔案是用來設定允許登入的主機？",
        "options": [
            {
                "label": "/etc/allow", 
                "value": "A"
            },
            {
                "label": "/etc/tcp_allow", 
                "value": "B"
            },
            {
                "label": "/etc/tcp_wrappers.conf", 
                "value": "C"
            },
            {
                "label": "/etc/hosts.allow", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-17",
        "question": "下列哪一項指令，可一次清除所有 Iptables 的規則？",
        "options": [
            {
                "label": "iptables -F", 
                "value": "A"
            },
            {
                "label": "iptables -Z", 
                "value": "B"
            },
            {
                "label": "iptables -C", 
                "value": "C"
            },
            {
                "label": "iptables -E", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-18",
        "question": "Iptables 的指令參數中，下列哪一項參數可用來刪除一個非系統內建空鏈？",
        "options": [
            {
                "label": "-D", 
                "value": "A"
            },
            {
                "label": "-X", 
                "value": "B"
            },
            {
                "label": "-M", 
                "value": "C"
            },
            {
                "label": "-F", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-19",
        "question": "關於 Iptables 的指令，設定封包條件的參數敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "-i 指定進入的封包類別", 
                "value": "A"
            },
            {
                "label": "-s 指定封包的來源 IP 位址", 
                "value": "B"
            },
            {
                "label": "-dp 指定封包目的端的埠號", 
                "value": "C"
            },
            {
                "label": "-p 指定所屬封包的類型", 
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "7-20",
        "question": "關於 Iptables 的指令，設定處理方式的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "ACCEPT 允許該封包通過", 
                "value": "A"
            },
            {
                "label": "DROP 丟棄該封包並回應錯誤訊息", 
                "value": "B"
            },
            {
                "label": "SNAT 修改封包來源端位址", 
                "value": "C"
            },
            {
                "label": "MASQUERADE 將封包進行偽裝處理", 
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "7-21",
        "question": "請問下列哪一項不是 Iptables 對於連線狀態表示法？",
        "options": [
            {
                "label": "NEW", 
                "value": "A"
            },
            {
                "label": "VALID", 
                "value": "B"
            },
            {
                "label": "ESTABLSHED", 
                "value": "C"
            },
            {
                "label": "RELATED", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-22",
        "question": "下列哪些網址需要使用 NAT（Network Address Translation）才能將封包傳送出去？（複選）",
        "options": [
            {
                "label": "10.1.1.25", 
                "value": "A"
            },
            {
                "label": "168.192.0.1", 
                "value": "B"
            },
            {
                "label": "172.16.25.36", 
                "value": "C"
            },
            {
                "label": "172.30.14.5", 
                "value": "D"
            }
        ],
        "answer": ["A", "C", "D"],
        "type": "multiple"
    },
    {
        "id": "7-23",
        "question": "關於 /etc/hosts.allow 及 /etc/hosts.deny 的設定敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "在 /etc/hosts.deny 檔案中設定 ALL:ALL 是不被允許的", 
                "value": "A"
            },
            {
                "label": "swat : 192.168. 與 swat : 192.168.0.0/255.255.0.0 的設定是一樣的", 
                "value": "B"
            },
            {
                "label": "若連線來源在 /etc/hosts.allow 檔即符合規則，就不會繼續檢查", 
                "value": "C"
            },
            {
                "label": "/etc/hosts.allow 及 /etc/hosts.deny 所設定的條件不可以互相抵觸", 
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-24",
        "question": "如一個封包符合防火牆的規則，此規則中會定義該對此封包如何處置，此種機制在規則中稱為目標。請問下列哪一個不是 Iptables 的目標？",
        "options": [
            {
                "label": "DROP", 
                "value": "A"
            },
            {
                "label": "REDIRECT", 
                "value": "B"
            },
            {
                "label": "RETURN", 
                "value": "C"
            },
            {
                "label": "DENY", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-25",
        "question": "在 /etc/hosts.allow 裡，下列哪一項是同意讓 my.domail 的使用者使用 in.tftpd ？",
        "options": [
            {
                "label": "ALL EXCEPT in.tftpd : .my.domain", 
                "value": "A"
            },
            {
                "label": "in.tftpd : ALL EXCEPT .my.domain", 
                "value": "B"
            },
            {
                "label": "ALL : in.tftpd", 
                "value": "C"
            },
            {
                "label": "in.tftpd : .my.domain", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-26",
        "question": "在 /etc/hosts.deny 裡，下列哪些是同意讓 my.domain 的使用者使用 in.tftpd ？（複選）",
        "options": [
            {
                "label": "ALL EXCEPT in.tftpd : .my.domain", 
                "value": "A"
            },
            {
                "label": "in.tftpd : ALL EXCEPT .my.domain", 
                "value": "B"
            },
            {
                "label": "ALL : in.tftpd", 
                "value": "C"
            },
            {
                "label": "in.tftpd : .my.domain", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    },
    {
        "id": "7-27",
        "question": "下列哪一種伺服器可以加速 Web 伺服器的服務？",
        "options": [
            {
                "label": "DHCP", 
                "value": "A"
            },
            {
                "label": "NNTP", 
                "value": "B"
            },
            {
                "label": "NTP", 
                "value": "C"
            },
            {
                "label": "Squid", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-28",
        "question": "關於 Squid 功能的敘述，下列哪些正確？（複選）",
        "options": [
            {
                "label": "減少受歡迎網站連外頻寬的需求", 
                "value": "A"
            },
            {
                "label": "可以利用 ACL 來控制對外部網站", 
                "value": "B"
            },
            {
                "label": "加速 Web 伺服器的服務", 
                "value": "C"
            },
            {
                "label": "將郵件寄出", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-29",
        "question": "若封包通過 Iptables 中的每一串鏈中的規則而不受影響，則該封包最後的命運由什麼來決定？",
        "options": [
            {
                "label": "預設policy", 
                "value": "A"
            },
            {
                "label": "FORWARD", 
                "value": "B"
            },
            {
                "label": "OUTPUT", 
                "value": "C"
            },
            {
                "label": "INPUT", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-30",
        "question": "關於 NAT 功能的基本設定，下列哪一項正確？",
        "options": [
            {
                "label": "檢查 /proc/sys/net/piv4/ip_forward 的值是否有被修改成 1", 
                "value": "A"
            },
            {
                "label": "檢查 /proc/sys/net/piv4/ip_postrouting 的值是否有被修改成 1", 
                "value": "B"
            },
            {
                "label": "檢查 /proc/sys/net/piv4/ip_forward 的值是否有被修改成 0", 
                "value": "C"
            },
            {
                "label": "檢查 /proc/sys/net/piv4/ip_postrouting 的值是否有被修改成 0", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-31",
        "question": "下列哪一項可讓防火牆允許內部網路（網路介面 p3p1、IP 位址 192.268.1.0/24）可以查詢 DNS（Internet 接於網路介面 p5p2）？",
        "options": [
            {
                "label": "iptables -t filter -A FORWARD -p tcp -o p5p2 -d 0/0 --dport 80 -j ACCEPT", 
                "value": "A"
            },
            {
                "label": "iptables -t filter -A FORWARD -p udp -o p5p2 -d 0/0 --dport 53 -j ACCEPT", 
                "value": "B"
            },
            {
                "label": "iptables -t filter -A FORWARD -p tcp -o p5p2 -d 0/0 --dport 21 -j ACCEPT", 
                "value": "C"
            },
            {
                "label": "iptables -t filter -A INPUT -s 192.268.1.0/24 -i p5p2 --dport 22 -j ACCEPT", 
                "value": "D"
            }
        ],
        "answer": ["B"],
        "type": "single"
    },
    {
        "id": "7-32",
        "question": "設定 /proc/sys/net/ipv4/ip_forward 的檔案內容，其目的為下列哪一項？",
        "options": [
            {
                "label": "使封包可以在 p3p0 進出", 
                "value": "A"
            },
            {
                "label": "使封包可以在 p3p1 進出", 
                "value": "B"
            },
            {
                "label": "使封包可以轉換位址", 
                "value": "C"
            },
            {
                "label": "使封包可以通過主機不同的網路介面所連接的網路", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-33",
        "question": "為了避免舊的設定規則產生干擾，通常在啟用新的規則之前，會使用下列哪些指令清除內建規則設定？（複選）",
        "options": [
            {
                "label": "iptables -F", 
                "value": "A"
            },
            {
                "label": "iptables -F -t nat", 
                "value": "B"
            },
            {
                "label": "iptables -F -t mangle", 
                "value": "C"
            },
            {
                "label": "iptables -F -t default", 
                "value": "D"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-34",
        "question": "如附圖所示，為 TCP Wrapper 的設定，請問下列敘述哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                ["/etc/hosts.allow 檔內容如下:"],
                ["sshd : 192.168.11.5"],
                ["/etc/hosts.deny 檔內容如下:"],
                ["sshd : 192.168.11.0/255.255.255.0"]
            ]
        },
        "options": [
            {
                "label": "192.168.11.5 的 IP 無法 ssh 連線", 
                "value": "A"
            },
            {
                "label": "192.168.11.5 的 IP 可以 ssh 連線", 
                "value": "B"
            },
            {
                "label": "192.168.11.100 的 IP 無法 ssh 連線", 
                "value": "C"
            },
            {
                "label": "192.168.11.100 的 IP 可以 ssh 連線", 
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-35",
        "question": "如附圖所示，為 TCP Wrapper 的設定，請問下列敘述哪些正確？（複選）",
        "media": {
            "type": "table",
            "data": [
                ["/etc/hosts.allow 檔內容如下:"],
                ["(空)"],
                ["/etc/hosts.deny 檔內容如下:"],
                ["in.telnet : ALL EXCEPT 192.168.10.0/255.255.255.0"]
            ]
        },
        "options": [
            {
                "label": "192.168.10.20 可以 Telnet 連線", 
                "value": "A"
            },
            {
                "label": "192.168.10.20 不可 Telnet 連線", 
                "value": "B"
            },
            {
                "label": "192.168.20.1 可以 Telnet 連線", 
                "value": "C"
            },
            {
                "label": "192.168.20.1 不可 Telnet 連線", 
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "7-36",
        "question": "如附圖所示，試問圖中的設定具有下列哪一項意義？",
        "media": {
            "type": "table",
            "data": [
                ["iptables -t nat -A POSTROUTING -o p3p1 -s 192.168.1.0/24 -j SNAT –to-source 192.168.2.60"]
            ]
        },
        "options": [
            {
                "label": "凡 192.168.1.0 這個 C Class 的封包均轉向至 192.168.2.60", 
                "value": "A"
            },
            {
                "label": "凡經過 192.168.2.60 的封包均轉向至 192.168.1.0 這個 C Class", 
                "value": "B"
            },
            {
                "label": "把 192.168.1.0 這個 C Class 出去的封包均偽裝成 192.168.2.60", 
                "value": "C"
            },
            {
                "label": "把 192.168.1.0 這個 C Class 的預設路由設為 192.168.2.60", 
                "value": "D"
            }
        ],
        "answer": ["C"],
        "type": "single"
    },
    {
        "id": "7-37",
        "question": "為了避免就的設定規則產生干擾，通常在啟用新的規則之前，會使用下列哪些指令清除使用者自定的規則設定？（複選）",
        "options": [
            {
                "label": "iptables -X", 
                "value": "E"
            },
            {
                "label": "iptables -t nat -X", 
                "value": "F"
            },
            {
                "label": "iptables -t mangle -X", 
                "value": "G"
            },
            {
                "label": "iptables -t userdef -X", 
                "value": "H"
            }
        ],
        "answer": ["A", "B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-38",
        "question": "假設 NAT 主機對外的網路介面為 p3p1，現在欲擋掉內部網路連接外部 TCP port 6667，應使用下列哪一項設定 Iptables 的規則？",
        "options": [
            {
                "label": "iptables -A OUTPUT -o p3p1 -p tcp –dport 6667 -j DENY", 
                "value": "A"
            },
            {
                "label": "iptables -A OUTPUT -o p3p1 -p tcp –dport 6667 -j DROP", 
                "value": "B"
            },
            {
                "label": "iptables -A FORWARD -o p3p1 -p tcp –dport 6667 -j DENY", 
                "value": "C"
            },
            {
                "label": "iptables -A FORWARD -o p3p1 -p tcp –dport 6667 -j DROP", 
                "value": "D"
            }
        ],
        "answer": ["D"],
        "type": "single"
    },
    {
        "id": "7-39",
        "question": "若執行指令 iptables-save，則有下列哪一項效果？",
        "options": [
            {
                "label": "會將系統當時的規則輸出到標準輸出", 
                "value": "A"
            },
            {
                "label": "會將當時處理的封包內容輸出到標準輸出", 
                "value": "B"
            },
            {
                "label": "會將 filter tables 的規則輸出到標準輸出", 
                "value": "C"
            },
            {
                "label": "會將系統當時的封包路由狀態輸出到標準輸出", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-40",
        "question": "修改 squid.conf 之後，欲使新設定生效，應執行下列哪一項命令較為合適？",
        "options": [
            {
                "label": "squid -k reconfigure", 
                "value": "A"
            },
            {
                "label": "squid -k kill", 
                "value": "B"
            },
            {
                "label": "squid -k check", 
                "value": "C"
            },
            {
                "label": "/etc/rc.d/init.d/squid restart", 
                "value": "D"
            }
        ],
        "answer": ["A"],
        "type": "single"
    },
    {
        "id": "7-41",
        "question": "下列哪些伺服器軟體可以用來架設 Proxy Server？（複選）",
        "options": [
            {
                "label": "Squid", 
                "value": "A"
            },
            {
                "label": "Samba", 
                "value": "B"
            },
            {
                "label": "Apache", 
                "value": "C"
            },
            {
                "label": "Qpopper", 
                "value": "D"
            }
        ],
        "answer": ["A", "C"],
        "type": "multiple"
    },
    {
        "id": "7-42",
        "question": "關於 Table、Chain 和 Rule 的關係，下列哪些正確？（複選）",
        "options": [
            {
                "label": "Rule 包含 Chain", 
                "value": "A"
            },
            {
                "label": "Table 包含 Chain", 
                "value": "B"
            },
            {
                "label": "Chain 包含 Table", 
                "value": "C"
            },
            {
                "label": "Chain 包含 Rule", 
                "value": "D"
            }
        ],
        "answer": ["B", "D"],
        "type": "multiple"
    },
    {
        "id": "7-43",
        "question": "請問 Iptables 中，輸入封包不會經過下列哪些 Chain？（複選）",
        "options": [
            {
                "label": "PREROUTING", 
                "value": "A"
            },
            {
                "label": "FORWARD", 
                "value": "B"
            },
            {
                "label": "POSTROUTING", 
                "value": "C"
            },
            {
                "label": "INPUT", 
                "value": "D"
            }
        ],
        "answer": ["B", "C"],
        "type": "multiple"
    },
    {
        "id": "7-44",
        "question": "請問 Iptables 中，轉送封包不會經過下列哪些 Chain？（複選）",
        "options": [
            {
                "label": "OUTPUT", 
                "value": "A"
            },
            {
                "label": "FORWARD", 
                "value": "B"
            },
            {
                "label": "POSTROUTING", 
                "value": "C"
            },
            {
                "label": "INPUT", 
                "value": "D"
            }
        ],
        "answer": ["A", "D"],
        "type": "multiple"
    },
    {
        "id": "7-45",
        "question": "反向式代理伺服器（Reverse Proxy）的主要功能為下列哪些？（複選）",
        "options": [
            {
                "label": "伺服器為其服務對象", 
                "value": "A"
            },
            {
                "label": "減輕伺服器的負擔", 
                "value": "B"
            },
            {
                "label": "減輕用戶端的負擔", 
                "value": "C"
            },
            {
                "label": "增加網路的使用效率", 
                "value": "D"
            }
        ],
        "answer": ["A", "B"],
        "type": "multiple"
    }
];

// 初始化變量
let quizQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval; // 用於儲存 setInterval 的 ID
let startTime;     // 儲存測驗開始時間
let totalSeconds;  // 改為只宣告，不初始化
let markedQuestions = new Set(); // 新增: 用 Set 儲存標記問題的索引 (0-based)

// DOM元素
const startBtn = document.getElementById('startBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const reviewContainer = document.getElementById('review-container');
const questionType = document.getElementById('question-type');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const reviewBtn = document.getElementById('reviewBtn');
const restartBtn = document.getElementById('restartBtn');
const backToResultsBtn = document.getElementById('backToResultsBtn');
const reviewList = document.getElementById('review-list');
const scoreDisplay = document.getElementById('score-display');
const timeTaken = document.getElementById('time-taken');
const resultsSummary = document.getElementById('results-summary');
const mediaContainer = document.getElementById('media-container'); // Add a container for media
const historyBtn = document.getElementById('historyBtn'); 
const historyContainer = document.getElementById('history-container'); 
const closeHistoryBtn = document.createElement('button');  // 關閉按鈕
const homeBtn = document.getElementById('homeBtn'); // "回到首頁" 按鈕的 DOM 元素
const homeBtnFromResults = document.getElementById('homeBtnFromResults'); // "回到首頁" 按鈕 (results 頁面)
const jumpToSelect = document.getElementById('jumpToSelect');
const jumpBtn = document.getElementById('jumpBtn');
const jumpControls = document.querySelector('.jump-controls');
const jumpToInput = document.getElementById('jumpToInput'); // 新增輸入框參照
const jumpErrorMsg = document.getElementById('jumpErrorMsg'); // 新增錯誤訊息參照
const markBtn = document.getElementById('markBtn'); // 新增: 標記按鈕
const markedQuestionsContainer = document.getElementById('marked-questions-container'); // 新增: 標記容器
const markedQuestionsList = document.getElementById('marked-questions-list'); // 新增: 標記列表
const jumpMarkControls = document.querySelector('.jump-mark-controls'); // 新增: 包裹跳題和標記的容器


// 事件回傳器
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', goToPreviousQuestion);
nextBtn.addEventListener('click', goToNextQuestion);
submitBtn.addEventListener('click', submitQuiz);
reviewBtn.addEventListener('click', showReview);
restartBtn.addEventListener('click', restartQuiz);
backToResultsBtn.addEventListener('click', backToResults);
closeHistoryBtn.textContent = '關閉';
closeHistoryBtn.id = 'closeHistoryBtn';  // 設定 ID，方便 CSS 設定樣式
closeHistoryBtn.addEventListener('click', closeHistory);
historyBtn.addEventListener('click', loadHistory); 
homeBtn.addEventListener('click', goHome); 
homeBtnFromResults.addEventListener('click', goHome); // 事件監聽器 (results 頁面)
markBtn.addEventListener('click', toggleMarkQuestion); // 新增: 標記按鈕的事件監聽

// 從題庫中隨機抽取50題，如果題目數量不足50，則返回所有題目
function getRandomQuestions(count) {
    // 合併之前定義的題目數據和新增的題目
    const allQuestions = [...questionDatabase, ...additionalQuestions];

    // 如果題目數量不足count，直接返回所有題目
    if (allQuestions.length <= count) {
        return [...allQuestions];
    }

    // 否則隨機抽取count個題目
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 測驗開始
function startQuiz() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden'); // 隱藏歷史紀錄

    startBtn.classList.add('hidden');   // 隱藏「開始測驗」
    homeBtn.classList.remove('hidden'); // 顯示「回到首頁」
    // if (jumpControls) jumpControls.classList.remove('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.remove('hidden'); // 顯示跳題和標記的父容器

    // 隨機抽取50題，或所有可用題目（如果少於50題）
    quizQuestions = getRandomQuestions(50);
    populateJumpDropdown();
    currentQuestionIndex = 0;
    userAnswers = Array(quizQuestions.length).fill(null);
    markedQuestions.clear(); // 新增: 清除上一輪的標記
    updateMarkedQuestionsDisplay(); // 新增: 初始化標記列表顯示 (應為隱藏)

    // 更新進度顯示
    progressEl.textContent = `0 / ${quizQuestions.length}`;

    // 開始計時(在問題顯示後才開始計時, 並設定初始值)
    startTime = new Date();
    totalSeconds = 40 * 60; // 設定為 40 分鐘
    startTimer();   // 確保在設定完 totalSeconds 後才呼叫 startTimer

    startBtn.innerHTML = "<b>重新測驗</b>"; //將 "測驗開始" 按鈕文字改成 "重新測驗"
    timerEl.textContent = 'Time limit: 40:00'; // 重置顯示

    // 顯示第一題
    showQuestion(currentQuestionIndex);
    updateProgress();
}

// 遞迴函數來處理嵌套的 media.data
function renderMedia(container, data) { 
    const table = document.createElement('table');
    data.forEach(item => {
        if (Array.isArray(item)) {
            if (Array.isArray(item[0])) { // 檢查是否為嵌套陣列
                item.forEach(rowData => {
                    const row = document.createElement('tr');
                    rowData.forEach(cellData => {
                        const cell = document.createElement('td');
                        cell.innerHTML = cellData;  // 使用 innerHTML
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });
            } else { // 處理非嵌套陣列 (例如: ["資料表emp如下:"])
              const row = document.createElement('tr');
              const cell = document.createElement('td');
              cell.innerHTML = item[0]; // 使用 innerHTML
              row.appendChild(cell);
              table.appendChild(row);
            }

        } else {
            const textDiv = document.createElement('div');
            textDiv.textContent = item;
            container.appendChild(textDiv);
        }
    });
    container.appendChild(table);
}

// 填充跳題下拉選單 (顯示數字 1-50)
function populateJumpDropdown() {
    if (!jumpToSelect) return; // 安全檢查
    jumpToSelect.innerHTML = ''; // 清空舊選項
    quizQuestions.forEach((_, index) => { // 只需索引
        const option = document.createElement('option');
        option.value = index; // 儲存 0-based 索引
        option.textContent = index + 1; // 顯示 1-based 題號
        jumpToSelect.appendChild(option);
    });
}

// 處理跳題邏輯 (輸入框優先，非阻塞錯誤)
function handleJump() {
    // 在開始處理前清除上一次的錯誤訊息
    if (jumpErrorMsg) {
        jumpErrorMsg.textContent = ''; // 清空文字
        jumpErrorMsg.style.display = 'none'; // 隱藏元素
    }

    let targetIndex = -1;

    // 1. 優先處理輸入框
    const inputValue = jumpToInput ? jumpToInput.value.trim() : '';
    if (inputValue !== '') {
        const inputNumber = parseInt(inputValue, 10);
        if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= quizQuestions.length) {
            targetIndex = inputNumber - 1;
        } else {
            // --- 使用頁面元素顯示錯誤 ---
            if (jumpErrorMsg) {
                jumpErrorMsg.textContent = `請輸入 1 到 ${quizQuestions.length} 之間的有效題號！`;
                jumpErrorMsg.style.display = 'inline'; // 或 'block'
            }
            // --- 結束錯誤顯示 ---
            if (jumpToInput) {
                jumpToInput.focus();
                jumpToInput.select();
            }
            return; // 停止後續處理
        }
    } else if (jumpToSelect) {
        // 2. 如果輸入框為空，則使用下拉選單的選擇
        const selectedDropdownIndex = parseInt(jumpToSelect.value, 10);
         if (!isNaN(selectedDropdownIndex) && selectedDropdownIndex >= 0 && selectedDropdownIndex < quizQuestions.length) {
             targetIndex = selectedDropdownIndex;
        }
    }

    // 如果找到了有效的目標索引
    if (targetIndex !== -1) {
        currentQuestionIndex = targetIndex;
        showQuestion(currentQuestionIndex);
        if (jumpToInput) jumpToInput.value = ''; // 成功跳轉後清空輸入框
         // 如果是透過下拉選單成功跳轉，也要清除可能存在的錯誤訊息
        if (jumpErrorMsg && inputValue === '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    } else if (inputValue === '' && targetIndex === -1) {
        // 處理輸入框為空且下拉選單也無效的情況
        if (jumpErrorMsg) {
            jumpErrorMsg.textContent = "請選擇或輸入要跳轉的題號。";
            jumpErrorMsg.style.display = 'inline'; // 或 'block'
        }
    }
}

// 在 showQuestion 中
function showQuestion(index) {
    const question = quizQuestions[index];  // 取得當前題目
    questionNumber.textContent = `題目 ${index + 1} / ${quizQuestions.length}`;
    questionText.textContent = question.question;

    // 更新跳題下拉選單的當前選項
    if (jumpToSelect) {
        jumpToSelect.value = index; // 同步下拉選單的值
    }

    // 設置題目類型標籤
    if (question.type === 'single') {
        questionType.textContent = '單選題';
        questionType.className = 'question-tag single-choice';
    } else {
        questionType.textContent = '複選題';
        questionType.className = 'question-tag multiple-choice';
    }

     // Clear previous media content
    if (mediaContainer) {
      mediaContainer.innerHTML = '';
    }

    // Display media if present
    if (question.media && question.media.type === 'table') {
        renderMedia(mediaContainer, question.media.data); // 呼叫 renderMedia
    }
    
    // 清空選項內容
    optionsContainer.innerHTML = '';

    // 添加選項
    question.options.forEach((option, optIndex) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';

        const inputType = question.type === 'single' ? 'radio' : 'checkbox';

        // 檢查使用者是否已選擇該選項
        const isSelected = userAnswers[index] && userAnswers[index].includes(option.value);
        if (isSelected) {
            optionEl.classList.add('selected');
        }

        optionEl.innerHTML = `
            <input type="${inputType}" name="question${index}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-text">${option.value}. ${option.label}</span>
        `;

        // 添加點擊事件
        optionEl.addEventListener('click', function() {
            const input = this.querySelector('input');

            if (question.type === 'single') {
                // 對於單選題，取消所有其他選項的選中狀態
                document.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                // 選中當前選項
                this.classList.add('selected');
                userAnswers[index] = [input.value];
                input.checked = true;
            } else {
                // 對於多選題，切換當前選項的選中狀態
                this.classList.toggle('selected');
                input.checked = !input.checked;

                // 更新使用者答案
                if (!userAnswers[index]) {
                    userAnswers[index] = [];
                }

                if (input.checked) {
                    userAnswers[index].push(input.value);
                } else {
                    userAnswers[index] = userAnswers[index].filter(val => val !== input.value);
                }
            }

            // 更新進度（可能有新回答的題目）
            updateProgress();
        });

        optionsContainer.appendChild(optionEl);
    });

    // 更新按鈕狀態
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizQuestions.length - 1;

    // 始終顯示 submitBtn
    submitBtn.classList.remove('hidden');
    // 新增: 更新標記按鈕狀態
    updateMarkButtonState();
    // 新增: 更新標記題目列表顯示
    updateMarkedQuestionsDisplay();

    console.log(currentQuestionIndex);  // 偵錯訊息


    // 最後一題時，隱藏下一題按鈕，顯示提交按鈕
    /*
        if (index === quizQuestions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }
    */
}

// 新增: 切換標記問題
function toggleMarkQuestion() {
    const index = currentQuestionIndex;
    if (markedQuestions.has(index)) {
        markedQuestions.delete(index);
    } else {
        markedQuestions.add(index);
    }
    updateMarkButtonState(); // 更新按鈕文字/樣式
    updateMarkedQuestionsDisplay(); // 更新列表顯示
}

// 新增: 更新標記按鈕的文字和樣式
function updateMarkButtonState() {
    if (markedQuestions.has(currentQuestionIndex)) {
        markBtn.innerHTML = '<b>取消標記</b>';
        markBtn.classList.add('marked'); // 添加樣式 class
    } else {
        markBtn.innerHTML = '<b>標記此題</b>';
        markBtn.classList.remove('marked'); // 移除樣式 class
    }
}

// 新增: 更新已標記題目的顯示列表
function updateMarkedQuestionsDisplay() {
    markedQuestionsList.innerHTML = ''; // 清空現有列表

    if (markedQuestions.size === 0) {
        markedQuestionsContainer.classList.add('hidden'); // 如果沒有標記，隱藏容器
        return;
    }

    markedQuestionsContainer.classList.remove('hidden'); // 如果有標記，顯示容器

    // 將 Set 轉換為陣列並排序，以便按順序顯示
    const sortedMarkedIndices = Array.from(markedQuestions).sort((a, b) => a - b);

    sortedMarkedIndices.forEach(index => {
        const button = document.createElement('button');
        button.textContent = index + 1; // 顯示 1-based 題號
        button.className = 'marked-question-button';
        button.dataset.index = index; // 儲存 0-based 索引

        button.addEventListener('click', function() {
            const targetIndex = parseInt(this.dataset.index, 10);
            if (!isNaN(targetIndex) && targetIndex >= 0 && targetIndex < quizQuestions.length) {
                currentQuestionIndex = targetIndex;
                showQuestion(currentQuestionIndex);
                 // 清除跳題輸入框和錯誤訊息 (如果有的話)
                 if (jumpToInput) jumpToInput.value = '';
                 if (jumpErrorMsg) {
                    jumpErrorMsg.textContent = '';
                    jumpErrorMsg.style.display = 'none';
                }
            }
        });

        markedQuestionsList.appendChild(button);
    });
}

// showReview
function showReview() {
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');

    // 清空原有内容
    reviewList.innerHTML = '';

    // 生成詳細答題情況
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;

        // 檢查答案是否正解
        const isCorrect = userAnswer.length === correctAnswer.length &&
                         userAnswer.every(ans => correctAnswer.includes(ans));

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        // 題目類型
        const typeText = question.type === 'single' ? '單選題' : '複選題';

        // 使用者選擇的答案
        const userAnswerText = userAnswer.length > 0
            ? userAnswer.join(', ')
            : '未作答';

        // 正解答案
        const correctAnswerText = correctAnswer.join(', ');

        // 建立選項的 HTML
        let optionsHTML = '<div class="review-options">';
        question.options.forEach(opt => {
            // 為每個選項創建一個容器 div，並添加 class 以便 CSS 定位
            optionsHTML += `<div class="review-option-item">`;

            // 根據題目類型決定 input type
            const inputType = question.type === 'single' ? 'radio' : 'checkbox';
            // 檢查這個選項是否是使用者選擇的答案之一
            const isUserAnswer = userAnswer.includes(opt.value);
            // 添加一個 disabled 的 input 元素來模擬方塊，並根據使用者答案設定 checked 狀態
            optionsHTML += `<input type="${inputType}" class="review-checkbox" disabled ${isUserAnswer ? 'checked' : ''}>`;

            // 1. 選項編號 (A., B., etc.)
            optionsHTML += `<span class="option-prefix">${opt.value}.</span>`;

            // 2. 選項內容 (包含文字和可能的圖片)
            optionsHTML += `<span class="option-label-content">`;
            //    使用正規表達式來分割標籤字串，並保留 <img> 標籤
            //    /(<img.*?>)/ 這個 regex 會尋找 <img> 標籤，並將其作為分割後陣列的一部分保留下來
            const labelParts = opt.label.split(/(<img.*?>)/);

            // 遍歷分割後的部分，重建內容
            labelParts.forEach(part => {
                if (part) { // 確保部分不是空的
                    if (part.startsWith('<img')) {
                        // 如果是圖片標籤，直接加入
                        optionsHTML += part;
                    } else {
                        // 如果是文字，可以選擇性地再包一層 span，或直接加入文字
                        // 直接加入文字通常足夠
                        optionsHTML += part;
                         // 或者，如果你想對文字部分單獨應用樣式：
                         // optionsHTML += `<span class="option-text-part">${part}</span>`;
                    }
                }
            });
            optionsHTML += `</div>`; // 關閉 review-option-item
        });
        optionsHTML += '</div>'; // 關閉 review-options

        // Media display (handle both table and text)
        let mediaContent = '';
        if (question.media && question.media.type === 'table') {
            mediaContent += '<table class="review-table">'; // 添加 class
            function reviewRenderMedia(data) { // 巢狀結構
                data.forEach(item => {
                    if (Array.isArray(item)) {
                        if (Array.isArray(item[0])) { // 2D array (table rows)
                            item.forEach(rowData => {
                                mediaContent += '<tr>';
                                rowData.forEach(cellData => {
                                    mediaContent += `<td>${cellData}</td>`;
                                });
                                mediaContent += '</tr>';
                            });
                        } else { // 1D array (table row)
                           mediaContent += '<tr>';
                            item.forEach(cellData => {
                                mediaContent += `<td>${cellData}</td>`;
                            });
                            mediaContent += "</tr>";
                        }
                    } else {
                        mediaContent += `<div>${item}</div>`; // Render as simple text
                    }
                });
            }

            reviewRenderMedia(question.media.data);
            mediaContent += '</table>';
        }

        // 組合 HTML
        reviewItem.innerHTML = `
            <div class="review-question">${index + 1}. [${typeText}] ${question.question}</div>
            ${mediaContent}
            <div class="review-answers">
                <div>選項：</div>
                ${optionsHTML}
                <div>你的答案：<span class="user-answer">${userAnswerText}</span></div>
                <div>正確答案：<span class="correct-answer">${correctAnswerText}</span></div>
            </div>
            <div>${isCorrect ? '✓ 正確' : '✗ 錯誤'}</div>
        `;

        reviewList.appendChild(reviewItem);
    });
}

// 更新進度顯示
function updateProgress() {
    const answeredCount = userAnswers.filter(answer => answer !== null && answer.length > 0).length;
    progressEl.textContent = `Questions: ${answeredCount}/${quizQuestions.length}`;
}

// 下一題
function goToNextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// 上一題
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}


// 計時器
function startTimer() {
    if (timerInterval) {  // 如果已經有計時器在運行，先清除它
        clearInterval(timerInterval);
    }
    let totalSeconds = 40 * 60; // 每次開始計時都重置為 40 分鐘
    timerInterval = setInterval(function() {
        totalSeconds--;  // 每秒減1
        //計算 "分" 和 "秒"
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `Time limit: ${minutes}:${seconds}`;

        if (totalSeconds <= 0) {
            // 時間到，停止計時器並提交答案
            stopTimer();
            submitQuiz();
        }
    }, 1000);

    /*  
        timerInterval = setInterval(function() {
            totalSeconds++;
            const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const seconds = (totalSeconds % 60).toString().padStart(2, '0');
            timerEl.textContent = `${minutes}:${seconds}`;
        }, 1000);
    */
}

// 停止計時器
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null; // 清除 timerInterval，表示沒有計時器在運行
}

// 提交測試
function submitQuiz() {
    stopTimer();

    // 計算得分
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;
        if (userAnswer.length === correctAnswer.length && userAnswer.every(ans => correctAnswer.includes(ans))) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / quizQuestions.length) * 100);

    // 計算用時
    const endTime = new Date();
    const timeDiff = Math.floor((endTime - startTime) / 1000); // 秒
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;

    // 顯示结果
    quizContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');

    scoreDisplay.textContent = `得分: ${score}% (${correctCount}/${quizQuestions.length})`;
    timeTaken.textContent = `用時: ${minutes}分${seconds}秒`;

    // 生成總分訊息
    let summaryText = '';
    if (score >= 90) {
        summaryText = '這波簡直太神了啦！';
    } else if (score >= 70) {
        summaryText = '通過邊緣繼續保持！';
    } else if (score >= 60) {
        summaryText = '就差那麼一點點啊！';
    } else {
        summaryText = '你真他喵的爛透了!';
    }

    resultsSummary.textContent = summaryText;

    // 儲存測驗結果到 localStorage (保留自動刪除最舊紀錄的邏輯)
    const quizResult = {
        score: score,
        time: `${minutes}分${seconds}秒`,
        questions: quizQuestions,  // 儲存問題
        userAnswers: userAnswers, // 儲存使用者答案
        date: new Date().toLocaleString() // 儲存測驗日期和時間
    };

    let history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]'); // 讀取歷史紀錄
    history.push(quizResult); // 加入新的結果

    // 限制歷史紀錄數量 (最多 20 筆)
    if (history.length > 20) {
        history.shift(); // 移除最舊的紀錄
    }

    localStorage.setItem('quizHistory_net', JSON.stringify(history)); // 儲存回 localStorage
}

// 返回结果頁面
function backToResults() {
    reviewContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
}

// 重新開始測試
function restartQuiz() {
    resultsContainer.classList.add('hidden');
    quizQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = [];
    startQuiz();  // 重新開始測驗
}

// 載入並顯示歷史紀錄
function loadHistory() {
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');    // 顯示歷史紀錄容器
    historyContainer.innerHTML = '<h2>歷史記錄</h2>';   // 清空並添加標題

    const history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');

    if (history.length === 0) {
        historyContainer.innerHTML += '<p>目前沒有任何記錄</p>';
        historyContainer.appendChild(closeHistoryBtn);  //加入關閉按鈕
        return;
    }
    //正序迴圈
    for (let i = 0; i < history.length; i++) { // 改為正序遍歷
        const result = history[i];
        const resultDiv = document.createElement('div');
        resultDiv.className = 'history-item';

        // 將原本的 innerHTML 放入一個新的 div 內，並給予 class name
        const innerContentDiv = document.createElement('div');
        resultDiv.className = 'history-item';
        resultDiv.innerHTML = `
            <p><strong>測驗時間：</strong>${result.date}</p>
            <p><strong>得分：</strong>${result.score}%</p>
            <p><strong>用時：</strong>${result.time}</p>
            <button class="review-history-btn" data-index="${i}">查看詳情</button>
            <button class="delete-history-btn" data-index="${i}">刪除</button> 
        `;
        // 將新的 div 插入到 resultDiv
        resultDiv.appendChild(innerContentDiv);
        historyContainer.appendChild(resultDiv);
    }
    //加入關閉按鈕.
    historyContainer.appendChild(closeHistoryBtn);

    // 添加事件監聽器到 "查看詳情" 按鈕
    document.querySelectorAll('.review-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10);
            showReviewFromHistory(index);
        });
    });

    // 刪除按鈕的事件監聽器
    document.querySelectorAll('.delete-history-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index, 10); // 取得按鈕上的 data-index (正序)
            deleteHistoryItem(index); // 傳遞正序的 index
        });
    });
}

// 關閉歷史紀錄
function closeHistory() {
    historyContainer.classList.add('hidden');
    welcomeScreen.classList.remove('hidden'); // 回到歡迎畫面
    
    // 停止計時器並重置顯示
    stopTimer();    
    timerEl.textContent = 'Time limit: 40:00'; // 重置顯示

    // 檢查是否在測驗中
    if (quizContainer.classList.contains('hidden')) {
        // 不在測驗中，將按鈕文字設為 "測驗開始"
        startBtn.innerHTML = "<b>測驗開始</b>";
    }else{
        startBtn.innerHTML = "<b>重新測驗</b>";
    }
}

// 從歷史紀錄中顯示答題詳情
function showReviewFromHistory(historyIndex) {
    const history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');
    const result = history[historyIndex];

    // 將歷史資料設定到全域變數，讓 showReview 函數可以使用
    quizQuestions = result.questions;
    userAnswers = result.userAnswers;
    currentQuestionIndex = 0; // 重置題目索引

    // 切換到答題詳情頁面
    historyContainer.classList.add('hidden');
    reviewContainer.classList.remove('hidden');
    showReview(); // 呼叫原本的 showReview 函數
}

// 刪除歷史紀錄的函數
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('quizHistory_net') || '[]');
    history.splice(index, 1); // 直接使用 splice 刪除指定索引的元素 (正序索引)
    // history.splice(history.length - 1 - index, 1); // 從陣列中移除指定索引的元素 (倒序索引要轉成正序)
    localStorage.setItem('quizHistory_net', JSON.stringify(history));
    loadHistory(); // 重新載入歷史紀錄
}

// 回到首頁
function goHome() {
    // 隱藏所有非首頁的區塊
    quizContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    reviewContainer.classList.add('hidden');
    historyContainer.classList.add('hidden');
    // 顯示首頁
    welcomeScreen.classList.remove('hidden');
    // 顯示開始按鈕, 隱藏回首頁按鈕
    startBtn.classList.remove('hidden');
    homeBtn.classList.add('hidden');
    // if (jumpControls) jumpControls.classList.add('hidden'); // 改為控制父容器
    if (jumpMarkControls) jumpMarkControls.classList.add('hidden'); // 隱藏跳題和標記的父容器

    // 重置計時器和相關變數
    stopTimer(); // 停止計時器
    //totalSeconds = 0;  //不需要設定為0 
    timerEl.textContent = 'Time limit: 40:00'; // 重置顯示
    currentQuestionIndex = 0;
    userAnswers = [];
    markedQuestions.clear(); // 新增: 清除標記
    updateMarkedQuestionsDisplay(); // 新增: 更新標記列表顯示 (應為隱藏)
    //quizQuestions = [];  // 不需要了， 因為每次都會重新開始
    updateProgress(); // 更新進度
    startBtn.innerHTML = "<b>測驗開始</b>"; // 回到首頁後, 將 "重新測驗" 按鈕文字改回 "測驗開始"
    // 新增: 重置標記按鈕狀態
    markBtn.innerHTML = '<b>標記此題</b>';
    markBtn.classList.remove('marked');
}

if (jumpBtn) { // 檢查按鈕是否存在
    jumpBtn.addEventListener('click', handleJump);
}
// ===== 新增輸入框 Enter 和 input 事件 ===== //
if (jumpToInput) { // 檢查輸入框是否存在
    jumpToInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleJump();
        }
    });
    // 當使用者在輸入框輸入時清除錯誤訊息 (可選)
    jumpToInput.addEventListener('input', () => {
        if (jumpErrorMsg && jumpErrorMsg.textContent !== '') {
            jumpErrorMsg.textContent = '';
            jumpErrorMsg.style.display = 'none';
        }
    });
}

// 綁定歷史紀錄
historyBtn.addEventListener('click', loadHistory);