import React, {
  useState, useRef,
} from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { RadioButton } from 'react-native-paper';
import global from '../../assets/styles/global';
import CardFreeCourse from '../components/CardFreeCourse';
import CardPremiumCourse from '../components/CardPremiumCourse';
import CardLiveCourse from '../components/CardLiveCourse';

const Pelatihan = ({ navigation }) => {
  const [find, setFind] = useState();
  const [checked, setChecked] = useState('all');
  const [isClose, setIsClose] = useState(true);

  const { height } = Dimensions.get('window');
  const hightSheet = 998 - height + 380;

  const renderInner = () => (
    <View style={styles.panel}>
      <Text style={[global.titleText, { color: '#1C335E', marginBottom: 10 }]}>Level</Text>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setChecked('all')}
        >
          <RadioButton
            value="all"
            color="#335CAB"
            uncheckedColor="#323232"
            status={checked === 'all' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('all')}
          />
          <Text style={[global.med12Text, { color: '#222425' }]}>Semua Level</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setChecked('dasar')}
        >
          <RadioButton
            value="dasar"
            color="#335CAB"
            uncheckedColor="#323232"
            status={checked === 'dasar' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('dasar')}
          />
          <Text style={[global.med12Text, { color: '#222425' }]}>Dasar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setChecked('menengah')}
        >
          <RadioButton
            value="menengah"
            color="#335CAB"
            uncheckedColor="#323232"
            status={checked === 'menengah' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('menengah')}
          />
          <Text style={[global.med12Text, { color: '#222425' }]}>Menengah</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => setChecked('atas')}
        >
          <RadioButton
            value="atas"
            color="#335CAB"
            uncheckedColor="#323232"
            status={checked === 'atas' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('atas')}
          />
          <Text style={[global.med12Text, { color: '#222425' }]}>Atas</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={global.containerButton}
        onPress={() => sheetRef.current.snapTo(1)}
      >
        <Text style={[
          global.titleText, { fontSize: 14, color: 'white', textAlign: 'center' },
        ]}
        >
          Apply Filters
        </Text>
      </TouchableOpacity>
    </View>
  );
  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  const AnimatedView = Animated.View;

  const fall = new Animated.Value(1);
  const animatedShadowOpacity = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });
  const sheetRef = useRef(null);
  return (
    <ScrollView
      scrollEnabled={isClose}
    >
      <BottomSheet
        ref={sheetRef}
        snapPoints={[hightSheet || 0, 0, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        onOpenStart={() => setIsClose(false)}
        onCloseEnd={() => setIsClose(true)}
        enabledContentTapInteraction={false}
      />
      <View style={global.container}>
        <AnimatedView
          pointerEvents="none"
          style={[
            styles.shadowContainer,
            {
              opacity: animatedShadowOpacity,
            },
          ]}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40 }}>
          <View style={[global.containerInput, {
            backgroundColor: '#EFF0F0',
            borderWidth: 0,
            marginBottom: 0,
            width: global.containerInput.width - 60,
            flexDirection: 'row',
          }]}
          >
            <TouchableOpacity
              onPress={() => {}}
              disabled={!isClose}
              style={{ alignSelf: 'center', marginLeft: 16 }}
            >
              <Ionicons name="md-search-outline" size={24} color="#6B7075" />
            </TouchableOpacity>
            <TextInput
              editable={isClose}
              inlineImageLeft="search_icon"
              style={[global.textInput, { paddingHorizontal: 0, paddingLeft: 16, paddingRight: 60 }]}
              placeholder="Find Courses....."
              onChangeText={setFind}
              value={find}
            />
          </View>
          <TouchableOpacity
            onPress={() => sheetRef.current.snapTo(0)}
            disabled={!isClose}
            style={{ alignItems: 'center', marginRight: 2 }}
          >
            <FontAwesome
              name="sliders"
              size={24}
              color="white"
              style={{
                backgroundColor: '#335CAB',
                transform: [{ rotate: '-90deg' }],
                padding: 13,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,
          }}
          >
            <Text style={[global.titleText, { color: '#222425' }]}>Free Course</Text>
            <TouchableOpacity
              disabled={!isClose}
              onPress={() => navigation.navigate('Course', { title: 'Free Course', isClose })}
            >
              <Text style={[global.sb12Text, { color: '#335CAB' }]}>See All</Text>
            </TouchableOpacity>
          </View>
          <CardFreeCourse isClose={isClose} />
          <CardFreeCourse isClose={isClose} />
        </View>
        <View style={{ marginBottom: 20 }}>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,
          }}
          >
            <Text style={[global.titleText, { color: '#222425' }]}>Premuim Course</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Course', { title: 'Premium Course' })}
            >
              <Text style={[global.sb12Text, { color: '#335CAB' }]}>See All</Text>
            </TouchableOpacity>
          </View>
          <CardPremiumCourse isClose={isClose} />
          <CardPremiumCourse isClose={isClose} />
        </View>
        <View style={{ marginBottom: 40 }}>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,
          }}
          >
            <Text style={[global.titleText, { color: '#222425' }]}>Live Course</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Course', { title: 'Live Course' })}
            >
              <Text style={[global.sb12Text, { color: '#335CAB' }]}>See All</Text>
            </TouchableOpacity>
          </View>
          <CardLiveCourse isClose={isClose} />
          <CardLiveCourse isClose={isClose} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    backgroundColor: 'white',
    padding: 20,
    height: '100%',
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 80,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#EFF0F0',
    marginVertical: 10,
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
    zIndex: 10,
  },
});
export default Pelatihan;
