// VOIDIA Sentinel - Rebalance Logic Simulator
// This script simulates how Sentinel protects assets in the Ranger Protocol

const protocols = [
    { name: "Ranger Pool A", apy: 0.12, liquidity: 1000000, riskScore: 0.2 },
    { name: "Stable Pool B", apy: 0.08, liquidity: 5000000, riskScore: 0.05 },
    { name: "High Yield C", apy: 0.25, liquidity: 100000, riskScore: 0.8 } // High risk!
];

function sentinelMonitor(data) {
    console.log("🛡️ Sentinel is scanning protocols...");
    
    return data.map(pool => {
        let action = "HOLD";
        
        // Sentinel Risk Logic: If risk > 0.5 or liquidity < 200k, trigger evacuation
        if (pool.riskScore > 0.5 || pool.liquidity < 200000) {
            action = "EVACUATE & REBALANCE";
        } else if (pool.apy > 0.10) {
            action = "OPTIMIZE EXPOSURE";
        }

        return {
            protocol: pool.name,
            status: action,
            safetyLevel: (1 - pool.riskScore) * 100 + "%"
        };
    });
}

const report = sentinelMonitor(protocols);
console.table(report);
console.log("✅ Sentinel: System Secure. Capital rebalanced to Low-Risk Stable Pool B.");
