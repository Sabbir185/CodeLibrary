# Md. Sabbir Ahmmed, ID: 185, 8A
# Five number summary
left_array = []
right_array = []
k = 0

def odd(arr, n):
    index = ( n - 1 ) // 2
    k = index
    median = arr[index]
    return (median, k)


def even(arr, n):
    mid_index = ( n-1 ) // 2
    next_index = ( n // 2 )
    k = mid_index + 1
    median = ( arr[mid_index] + arr[next_index] ) / 2
    return (median, k)


def left_side(left_array, k):
    if k%2 == 0:
        Q1, l = even( left_array, k)
    else:
        Q1, l = odd( left_array, k)
    
    return Q1


def right_side(right_array, k):
    if k%2 == 0:
        Q3, r = even( right_array, k)
    else:
        Q3, r = odd( right_array, k)

    return Q3


if __name__ == "__main__":

    n = int(input("Enter the number of data : "))

    data_set = list(map(int, input("Enter all elements of the dataset with space then finally hit Enter : \n").split()))[:n]

    print('\n:: Five Number Summary ::')
    data_set.sort()
    min_value = data_set[0]
    max_value = data_set[n-1]

    print("length = {}, sorted dataset : {}".format(n, data_set))

    if n%2 == 0:
        Q2, k = even( data_set, n)
        
        left_array = data_set[:k]
        right_array = data_set[k:]   

        #left side sub-dataset
        Q1 = left_side(left_array, k)

        #right side sub-dataset
        Q3 = right_side(right_array, k)


        print(f"\nmin = {min_value}, Q1 = {Q1}, Q2 = {Q2}, Q3 = {Q3}, max = {max_value}\n")
        print("Left side new dataset", left_array)
        print("Right side new dataset", right_array)

    else:
        Q2, k = odd( data_set, n)

        left_array = data_set[:k]
        right_array = data_set[k+1:] 

        #left side sub-dataset
        Q1 = left_side(left_array, k)

        #right side sub-dataset
        Q3 = right_side(right_array, k)


        print(f"\nmin = {min_value}, Q1 = {Q1}, Q2 = {Q2}, Q3 = {Q3}, max = {max_value}\n")
        print("Left side new dataset", left_array)
        print("Right side new dataset", right_array)
  