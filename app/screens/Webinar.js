import React, {
  useState, useRef,
} from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import global from '../../assets/styles/global';
import CardWebinar from '../components/CardWebinar';

const Webinar = ({ navigation }) => {
  const [find, setFind] = useState();
  const [init, setInit] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const [selectedType, setSelectedType] = useState();

  const dateTime = new Date();
  const convertAmPm = (tm) => {
    let hours = tm.getHours();
    let minutes = tm.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
  };

  const [date, setDate] = useState(dateTime.toLocaleDateString());
  const [time, setTime] = useState(convertAmPm(dateTime));
  const [dateVisible, setDateVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);

  const confrimDate = (dt) => {
    setDate(dt.toLocaleDateString());
    setDateVisible(false);
  };

  const confrimTime = (tm) => {
    setTime(convertAmPm(tm));
    setTimeVisible(false);
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <Text style={[global.titleText, { color: '#1C335E', marginBottom: 5 }]}>Tipe Webinar</Text>
      <View style={{
        backgroundColor: '#F5F5F5', paddingVertical: 12, borderRadius: 12, marginBottom: 20,
      }}
      >
        <Picker
          style={[global.med12Text, { color: '#222425', marginLeft: 10 }]}
          dropdownIconColor="#335CAB"
          selectedValue={selectedType}
          onValueChange={(item) => setSelectedType(item)}
          itemStyle={[global.med12Text, { color: '#222425' }]}
        >
          <Picker.Item label="All Webinar" value="all" />
          <Picker.Item label="Web" value="web" />
          <Picker.Item label="Mobile" value="mobile" />
        </Picker>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 40 }}>
        <View style={{ width: '50%' }}>
          <Text style={[global.titleText, { color: '#1C335E', marginBottom: 5 }]}>Date</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F5F5', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, marginRight: 10,
            }}
            onPress={() => setDateVisible(true)}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="calendar-blank" size={18} color="#335CAB" style={{ marginRight: 5 }} />
              <Text style={[global.med12Text, { color: '#222425' }]}>{date}</Text>
            </View>
            <DateTimePickerModal
              isVisible={dateVisible}
              mode="date"
              onConfirm={confrimDate}
              onCancel={() => setDateVisible(false)}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '50%' }}>
          <Text style={[global.titleText, { color: '#1C335E', marginBottom: 5, marginLeft: 10 }]}>Time</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F5F5', paddingVertical: 12, paddingHorizontal: 18, borderRadius: 12, marginLeft: 10,
            }}
            onPress={() => setTimeVisible(true)}
          >
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="clock-outline" size={18} color="#335CAB" style={{ marginRight: 5 }} />
              <Text style={[global.med12Text, { color: '#222425' }]}>{time}</Text>
            </View>
            <DateTimePickerModal
              isVisible={timeVisible}
              mode="time"
              onConfirm={confrimTime}
              onCancel={() => setTimeVisible(false)}
            />
          </TouchableOpacity>
        </View>
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

  const fall = new Animated.Value(init);
  const animatedShadowOpacity = Animated.interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });
  const sheetRef = useRef(null);
  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[330, 0, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        onOpenStart={() => {
          setInit(0); setIsShow(true);
        }}
        onCloseEnd={() => {
          setInit(1); setIsShow(false);
        }}
        callbackNode={fall}
        enabledContentTapInteraction={false}
      />
      <AnimatedView
        pointerEvents={isShow ? 'box-only' : 'none'}
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
      <View style={[global.container, { paddingVertical: 0 }]}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, paddingTop: 80,
        }}
        >
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
              style={{ alignSelf: 'center', marginLeft: 16 }}
            >
              <Ionicons name="md-search-outline" size={24} color="#6B7075" />
            </TouchableOpacity>
            <TextInput
              inlineImageLeft="search_icon"
              style={[global.textInput, { paddingHorizontal: 0, paddingLeft: 16, paddingRight: 60 }]}
              placeholder="Find Courses....."
              onChangeText={setFind}
              value={find}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              sheetRef.current.snapTo(0);
            }}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <CardWebinar />
          <CardWebinar />
          <CardWebinar />
        </ScrollView>
      </View>
    </>
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
export default Webinar;
