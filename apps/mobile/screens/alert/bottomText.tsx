import { Text, View } from '@/components/Themed';
import { StyleSheet } from 'react-native';

export default function BottomText() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Powered by Rumsan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
