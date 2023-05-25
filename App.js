import AllExpensesScreen from "./screens/AllExpenses"
import ExpenseProvider from "./store/context/expenses"
import { GlobalStyles } from "./constants/styles"
import IconButton from "./components/ui/IconButton"
import { Ionicons } from "@expo/vector-icons"
import ManageExpenseScreen from "./screens/ManageExpense"
import { NavigationContainer } from "@react-navigation/native"
import RecentExpensesScreen from "./screens/RecentExpenses"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500
        },
        tabBarActiveTintColor: "white",
        headerRight: ({ tintColor }) => {
          return (
            <IconButton onPress={() => navigation.navigate("ManageExpense")}>
              <Ionicons name="add-outline" color={tintColor} size={32} />
            </IconButton>
          )
        }
      })}
    >
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
          tabBarLabel: "All"
        }}
      />
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="receipt-outline" color={color} size={size} />
          ),
          tabBarLabel: "Recent"
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="OverviewExpenses"
              component={ExpensesOverview}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
              options={{
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500
                },
                headerTintColor: "white",
                presentation: "modal"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
