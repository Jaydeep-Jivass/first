// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, View } from 'react-native';
import WiFiForm from './src/components/WiFiForm';
import RecentSSIDs from './src/components/RecentSSIDs';
import WiFiLogs from './src/components/WiFiLogs';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [ssidData, setSsidData] = useState(null);
  const [recentSsids, setRecentSsids] = useState(['SSID_1', 'SSID_2', 'SSID_3']);

  const handleFormSubmit = (data) => {
    setSsidData(data);
  };

  const handleSelectSsid = (ssid) => {
    setSsidData({ ssid, password: '', ipAddress: '192.168.4.1' }); // Assume default IP for ESP8266
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="WiFi Logs" onPress={() => setShowForm(true)} />
      </View>
      {showForm && !ssidData && (
        <View>
          <WiFiForm onSubmit={handleFormSubmit} />
          <RecentSSIDs ssids={recentSsids} onSelect={handleSelectSsid} />
        </View>
      )}
      {ssidData && <WiFiLogs {...ssidData} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default App;
