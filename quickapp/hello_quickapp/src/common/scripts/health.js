import health from "@service.health";

let callbacks = [];

const FALLBACK_DATA_TYPES = {
  HEART_RATE: 1,
  SPO2: 2,
  STRESS: 3,
};

function getDataTypes() {
  try {
    if (health && health.DATA_TYPES) return health.DATA_TYPES;
  } catch(e) {}
  return FALLBACK_DATA_TYPES;
}

function subscribe(onUpdate) {
  callbacks.push(onUpdate);
  var DT = getDataTypes();
  try {
    if (!health || typeof health.subscribeSample !== 'function') return;
    health.subscribeSample({
      dataType: DT.HEART_RATE,
      callback: (sample) => {
        try { onUpdate("hr", sample); } catch(e) {}
      },
      fail: (data, code) => console.log("HR subscribe fail, code:", code),
    });
    health.subscribeSample({
      dataType: DT.SPO2,
      callback: (sample) => {
        try { onUpdate("spo2", sample); } catch(e) {}
      },
      fail: (data, code) => console.log("SPO2 subscribe fail, code:", code),
    });
    health.subscribeSample({
      dataType: DT.STRESS,
      callback: (sample) => {
        try { onUpdate("stress", sample); } catch(e) {}
      },
      fail: (data, code) => console.log("Stress subscribe fail, code:", code),
    });
  } catch(e) {
    console.log("health subscribe error:", e);
  }
}

function unsubscribe() {
  var DT = getDataTypes();
  try {
    if (health && typeof health.unsubscribeSample === 'function') {
      health.unsubscribeSample({ dataType: DT.HEART_RATE });
      health.unsubscribeSample({ dataType: DT.SPO2 });
      health.unsubscribeSample({ dataType: DT.STRESS });
    }
  } catch(e) {}
  callbacks = [];
}

function getRecent() {
  var DT = getDataTypes();
  return new Promise((resolve, reject) => {
    try {
      if (!health || typeof health.getRecentSamples !== 'function') {
        resolve({ hr: 70, spo2: 98, stress: 1 });
        return;
      }
      health.getRecentSamples({
        dataTypes: [DT.HEART_RATE, DT.SPO2, DT.STRESS],
        success: (list) => {
          let result = { hr: 70, spo2: 98, stress: 1 };
          try {
            if (list && list.length) {
              for (let item of list) {
                if (item.dataType === DT.HEART_RATE) result.hr = item.data.value;
                else if (item.dataType === DT.SPO2) result.spo2 = item.data.value;
                else if (item.dataType === DT.STRESS) result.stress = item.data.value;
              }
            }
          } catch(e) {}
          resolve(result);
        },
        fail: (data, code) => {
          console.log("getRecent fail, code:", code);
          resolve({ hr: 70, spo2: 98, stress: 1 });
        },
      });
    } catch(e) {
      resolve({ hr: 70, spo2: 98, stress: 1 });
    }
  });
}

export { subscribe, unsubscribe, getRecent };
export default { subscribe, unsubscribe, getRecent };
