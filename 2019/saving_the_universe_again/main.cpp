#include <iostream>
#include <fstream>
#include <string>

int main()  {
  std::ifstream file("input.txt");

  if (file.is_open()) {
    std::string line;

    getline(file, line);

    int nCases{ std::stoi(line) };

    std::cout << nCases;

    while (false) {
      std::cout << line << '\n';
      // using printf() in all tests for consistency
      // printf("%s", line.c_str());
    }
    file.close();
  }

  return 0;
}
