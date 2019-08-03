import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import ChoiceCard from "../components/ChoiceCard";
import CountResult from "../components/CountResult";
import Button from "../components/Button";
import { getResultColor, getRoundOutcome, getPercent } from "../utils";
import { CHOICES, COLORS } from "../constants";

function HomeScreen(props) {
  const [gamePrompt, setGamePrompt] = useState("Choose your weapon!");
  const [userChoice, setUserChoice] = useState({});
  const [computerChoice, setComputerChoice] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);
  const [winCount, setWinCount] = useState(0);
  const onPress = playerChoice => {
    const [result, compChoice] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
    const newComputerChoice = CHOICES.find(
      choice => choice.name === compChoice
    );
    switch (result) {
      case "Victory!":
        setWinCount(winCount + 1);
        break;
      case "Defeat!":
        setLoseCount(loseCount + 1);
        break;
    }
    setTotalCount(totalCount + 1);
    setGamePrompt(result);
    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
  };
  return (
    <View style={styles.container}>
      <Text
        style={[{ color: getResultColor(gamePrompt) }, styles.gamePromptText]}
      >
        {gamePrompt}
      </Text>
      <View style={styles.choiceCardWrapper}>
        <ChoiceCard player="Player" choice={userChoice} />
        <Text style={styles.textVs}>vs</Text>
        <ChoiceCard player="Computer" choice={computerChoice} />
      </View>
      {CHOICES.map(choice => {
        return (
          <Button key={choice.name} name={choice.name} onPress={onPress} />
        );
      })}
      <View style={styles.resultWrapper}>
        <Text style={styles.totalCountText}>Total: {totalCount}</Text>
        {totalCount ? (
          <View style={styles.percentWrapper}>
            <View
              style={{
                flex: winCount / totalCount,
                backgroundColor: COLORS.win
              }}
            />
            <View
              style={{
                flex: loseCount / totalCount,
                backgroundColor: COLORS.tie
              }}
            />
            <View
              style={{
                flex: (totalCount - winCount - loseCount) / totalCount,
                backgroundColor: COLORS.lose
              }}
            />
          </View>
        ) : (
          <View style={styles.percentWrapper} />
        )}
        <View style={styles.countWrapper}>
          <CountResult
            title="Win"
            count={winCount}
            percent={getPercent(winCount, totalCount)}
          />
          <CountResult
            title="Tie"
            count={totalCount - winCount - loseCount}
            percent={getPercent(totalCount - winCount - loseCount, totalCount)}
          />
          <CountResult
            title="Lose"
            count={loseCount}
            percent={getPercent(loseCount, totalCount)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#e9ebee"
  },
  gamePromptText: { fontSize: 20 },
  choiceCardWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  textVs: { color: "blue", fontSize: 16 },
  buttonContainer: { alignItems: "center", justifyContent: "center" },
  resultWrapper: {
    width: "100%"
  },
  totalCountText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  percentWrapper: {
    flexDirection: "row",
    marginHorizontal: "2%",
    height: 20,
    justifyContent: "center",
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden"
  },
  countWrapper: { flexDirection: "row", justifyContent: "space-evenly" }
});

export default HomeScreen;
