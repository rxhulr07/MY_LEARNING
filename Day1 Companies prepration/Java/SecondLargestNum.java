import java.util.*;

public class SecondLargestNum {
    

    public static int LargestNum(int [] arr){
         Arrays.sort(arr);
         int second = arr[arr.length-2];
         return second;
    }
    
    public static void main(String[] args) {
        int [] arr1 = {1,3,4,5,7};
        int result = LargestNum( arr1);
        System.out.println(result);
    }
}

