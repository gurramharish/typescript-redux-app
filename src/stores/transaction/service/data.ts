import { ITransaction } from "../states";

export const transactions: ITransaction[] = [
  {
    chaincode: "",
    channel: "channel-one",
    created: "8-1-2018 9:02 PM IST",
    creator: "OrdererMSP",
    endorser: "",
    hash: "",
    payloadHash: "",
    readSets: [],
    type: "CONFIG",
    validationCode: "",
    writeSets: []
  },
  {
    chaincode: "",
    channel: "channel-one",
    created: "8-1-2018 9:02 PM IST",
    creator: "OrdererMSP",
    endorser: "",
    hash: "",
    payloadHash: "",
    readSets: [],
    type: "CONFIG",
    validationCode: "",
    writeSets: []
  },
  {
    chaincode: "",
    channel: "channel-one",
    created: "8-1-2018 9:02 PM IST",
    creator: "OrdererMSP",
    endorser: "",
    hash: "",
    payloadHash: "",
    readSets: [],
    type: "CONFIG",
    validationCode: "",
    writeSets: []
  },
  {
    chaincode: "lscc",
    channel: "channel-one",
    created: "8-1-2018 9:02 PM IST",
    creator: "Org2MSP",
    endorser: "",
    hash: "03a2c1636252412e340bb43546ffef496083809c7e3e7d4afecf9b4ec60debb3",
    payloadHash: "",
    readSets: [],
    type: "ENDORSER_TRANSACTION",
    validationCode: "",
    writeSets: []
  },
  {
    chaincode: "mycc",
    channel: "channel-one",
    created: "8-1-2018 9:04 PM IST",
    creator: "Org1MSP",
    endorser: '{"Org1MSP"}',
    hash: "b2189ef05a5dc71a46b23ba914d42d54f4025b40851f308afc159ed5e9841f53",
    payloadHash:
      "3cb08c79ecf745bd380b7489e01158f482ee2099d2ea1b6139050f05995be4b7",
    readSets: [
      {
        chaincode: "lscc",
        set: [
          {
            key: "mycc",
            version: {
              block: "3",
              transaction: "0"
            }
          }
        ]
      },
      {
        chaincode: "mycc",
        set: [
          {
            key: "a",
            version: {
              block: "3",
              transaction: "0"
            }
          },
          {
            key: "b",
            version: {
              block: "3",
              transaction: "0"
            }
          }
        ]
      }
    ],
    type: "ENDORSER_TRANSACTION",
    validationCode: "VALID",
    writeSets: [
      {
        chaincode: "lscc",
        set: []
      },
      {
        chaincode: "mycc",
        set: [
          {
            deleted: false,
            key: "a",
            value: "90"
          },
          {
            deleted: false,
            key: "b",
            value: "210"
          }
        ]
      }
    ]
  }
];
